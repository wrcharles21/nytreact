/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: The node API for `babel` has been moved to `babel-core`.\\n    at Object.<anonymous> (C:\\\\Users\\\\USER\\\\Desktop\\\\Homework\\\\nytreact\\\\node_modules\\\\babel\\\\index.js:1:69)\\n    at Module._compile (module.js:573:30)\\n    at Object.Module._extensions..js (module.js:584:10)\\n    at Module.load (module.js:507:32)\\n    at tryModuleLoad (module.js:470:12)\\n    at Function.Module._load (module.js:462:3)\\n    at Module.require (module.js:517:17)\\n    at require (internal/module.js:11:18)\\n    at loadLoader (C:\\\\Users\\\\USER\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\node_modules\\\\loader-runner\\\\lib\\\\loadLoader.js:13:17)\\n    at iteratePitchingLoaders (C:\\\\Users\\\\USER\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:169:2)\\n    at runLoaders (C:\\\\Users\\\\USER\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:362:2)\\n    at NormalModule.doBuild (C:\\\\Users\\\\USER\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:181:3)\\n    at NormalModule.build (C:\\\\Users\\\\USER\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:274:15)\\n    at Compilation.buildModule (C:\\\\Users\\\\USER\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:149:10)\\n    at moduleFactory.create (C:\\\\Users\\\\USER\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:447:10)\\n    at factory (C:\\\\Users\\\\USER\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js:241:5)\\n    at applyPluginsAsyncWaterfall (C:\\\\Users\\\\USER\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js:94:13)\\n    at C:\\\\Users\\\\USER\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\node_modules\\\\tapable\\\\lib\\\\Tapable.js:268:11\\n    at NormalModuleFactory.params.normalModuleFactory.plugin (C:\\\\Users\\\\USER\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\lib\\\\CompatibilityPlugin.js:52:5)\\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (C:\\\\Users\\\\USER\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\node_modules\\\\tapable\\\\lib\\\\Tapable.js:272:13)\\n    at resolver (C:\\\\Users\\\\USER\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js:69:10)\\n    at process.nextTick (C:\\\\Users\\\\USER\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js:194:7)\\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\\n    at process._tickCallback (internal/process/next_tick.js:180:9)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIwLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);