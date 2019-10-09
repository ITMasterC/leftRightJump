

function setupModuleSystem(settings) {
    var importMap = { imports: { }, };
    importMap.imports['cc'] = settings.debug ? 'cocos3d-js.js' : 'cocos3d-js.min.js';
    const importMapElement = document.createElement('script');
    importMapElement.type = ccEnv.importMapType;
    importMapElement.text = JSON.stringify(importMap, undefined, 2);
    document.body.appendChild(importMapElement);
}

function loadPrerequisiteModules(settings) {
    const promises = [];
    settings.scripts.forEach(function(script) {
        if (!script.defer) {
            promises.push(ccEnv.imp(script.moduleId));
        }
    });
    return Promise.all(promises);
}

function loadScriptPackages(settings) {
    
        var promises = [];
        if (settings.scriptPackages) {
            for (var iScriptPackage = 0; iScriptPackage < settings.scriptPackages.length; ++iScriptPackage) {
                promises.push(ccEnv.imp(settings.scriptPackages[iScriptPackage]));
            }
        }
        return Promise.all(promises);
    
}

window.importEngine = function() {
    setupModuleSystem(window._CCSettings);
    return loadScriptPackages(window._CCSettings).then(function() {
        return ccEnv.imp("cc");
    });
};

window.boot = function () {
    var settings = window._CCSettings;
    window._CCSettings = undefined;

    
        var uuids = settings.uuids;

        var rawAssets = settings.rawAssets;
        var assetTypes = settings.assetTypes;
        var realRawAssets = settings.rawAssets = {};
        for (var mount in rawAssets) {
            var entries = rawAssets[mount];
            var realEntries = realRawAssets[mount] = {};
            for (var id in entries) {
                var entry = entries[id];
                var type = entry[1];
                // retrieve minified raw asset
                if (typeof type === 'number') {
                    entry[1] = assetTypes[type];
                }
                // retrieve uuid
                realEntries[uuids[id] || id] = entry;
            }
        }

        var scenes = settings.scenes;
        for (var i = 0; i < scenes.length; ++i) {
            var scene = scenes[i];
            if (typeof scene.uuid === 'number') {
                scene.uuid = uuids[scene.uuid];
            }
        }

        var packedAssets = settings.packedAssets;
        for (var packId in packedAssets) {
            var packedIds = packedAssets[packId];
            for (var j = 0; j < packedIds.length; ++j) {
                if (typeof packedIds[j] === 'number') {
                    packedIds[j] = uuids[packedIds[j]];
                }
            }
        }

        var subpackages = settings.subpackages;
        for (var subId in subpackages) {
            var uuidArray = subpackages[subId].uuids;
            if (uuidArray) {
                for (var k = 0, l = uuidArray.length; k < l; k++) {
                    if (typeof uuidArray[k] === 'number') {
                        uuidArray[k] = uuids[uuidArray[k]];
                    }
                }
            }
        }
    

    function setLoadingDisplay () {
        // Loading splash scene
        var splash = document.getElementById('splash');
        var progressBar = splash.querySelector('.progress-bar span');
        cc.loader.onProgress = function (completedCount, totalCount, item) {
            var percent = 100 * completedCount / totalCount;
            if (progressBar) {
                progressBar.style.width = percent.toFixed(2) + '%';
            }
        };
        splash.style.display = 'block';
        progressBar.style.width = '0%';

        cc.director.once(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function () {
            splash.style.display = 'none';
        });
    }

    var onStart = function () {
        cc.loader.downloader._subpackages = settings.subpackages;

        cc.view.enableRetina(true);
        cc.view.resizeWithBrowserSize(true);
		
		if (cc.sys.isBrowser) {
			setLoadingDisplay();
		}

		if (cc.sys.isMobile) {
			if (settings.orientation === 'landscape') {
				cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
			} else if (settings.orientation === 'portrait') {
				cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
			}
			cc.view.enableAutoFullScreen(false);
		}

		// Limit downloading max concurrent task to 2,
		// more tasks simultaneously may cause performance draw back on some android system / browsers.
		// You can adjust the number based on your own test result, you have to set it before any loading process to take effect.
		if (cc.sys.isBrowser && cc.sys.os === cc.sys.OS_ANDROID) {
			cc.macro.DOWNLOAD_MAX_CONCURRENT = 2;
		}
        
        
        cc.view.setDesignResolutionSize(960, 640, 4);
        
        // init assets
        cc.AssetLibrary.init({
            libraryPath: 'res/import',
            rawAssetsBase: 'res/raw-',
            rawAssets: settings.rawAssets,
            packedAssets: settings.packedAssets,
            md5AssetsMap: settings.md5AssetsMap,
            subpackages: settings.subpackages
        });

        var launchScene = settings.launchScene;
        loadPrerequisiteModules(settings).then(function() {
            // load scene
            cc.director.loadScene(launchScene, null,
                function () {
                    if (cc.sys.isBrowser) {
                        // show canvas
                        var canvas = document.getElementById('GameCanvas');
                        canvas.style.visibility = '';
                        var div = document.getElementById('GameDiv');
                        if (div) {
                            div.style.backgroundImage = '';
                        }
                    }
                    cc.loader.onProgress = null;
                    console.log('Success to load scene: ' + launchScene);
                }
            );
        });
    };

    // jsList
    var jsList = settings.jsList;
	/* <!--  --> */
	
		var bundledScript = 'src/project.js';
        if (jsList) {
            jsList = jsList.map(function (x) {
                return 'src/' + x;
            });
        } else {
			jsList = [];
        }
	
    var option = {
        id: 'GameCanvas',
        scenes: settings.scenes,
        debugMode: settings.debug ? cc.debug.DebugMode.INFO : cc.debug.DebugMode.ERROR,
        showFPS: !false && settings.debug,
        frameRate: 60,
        jsList: jsList,
        groupList: settings.groupList,
        collisionMatrix: settings.collisionMatrix,
        renderpipeline: settings.renderpipeline,
    }

    cc.game.run(option, onStart);
};


if (window.jsb) {
    require('src/settings.js');
    require('src/-jsb.js');
    require('jsb-adapter/engine/index.js');
    window.boot();
}
