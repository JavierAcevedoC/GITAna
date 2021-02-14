/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/electron-is-dev/index.js":
/*!***********************************************!*\
  !*** ./node_modules/electron-is-dev/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst electron = __webpack_require__(/*! electron */ \"electron\");\n\nif (typeof electron === 'string') {\n\tthrow new TypeError('Not running in an Electron environment!');\n}\n\nconst app = electron.app || electron.remote.app;\n\nconst isEnvSet = 'ELECTRON_IS_DEV' in process.env;\nconst getFromEnv = parseInt(process.env.ELECTRON_IS_DEV, 10) === 1;\n\nmodule.exports = isEnvSet ? getFromEnv : !app.isPackaged;\n\n\n//# sourceURL=webpack://GITAna/./node_modules/electron-is-dev/index.js?");

/***/ }),

/***/ "./src/electron/core/executor.ts":
/*!***************************************!*\
  !*** ./src/electron/core/executor.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar child_process_1 = __webpack_require__(/*! child_process */ \"child_process\");\nvar Executor = /** @class */ (function () {\n    function Executor() {\n    }\n    Executor.prototype.execute = function (command, callback) {\n        var _a;\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_b) {\n                switch (_b.label) {\n                    case 0: return [4 /*yield*/, ((_a = child_process_1.exec(command, function (error, stdout, stderr) {\n                            return callback(stdout);\n                        }).stdout) === null || _a === void 0 ? void 0 : _a.read())];\n                    case 1: return [2 /*return*/, _b.sent()];\n                }\n            });\n        });\n    };\n    return Executor;\n}());\nexports.default = Executor;\n\n\n//# sourceURL=webpack://GITAna/./src/electron/core/executor.ts?");

/***/ }),

/***/ "./src/electron/core/git-commands.ts":
/*!*******************************************!*\
  !*** ./src/electron/core/git-commands.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar GitCommands;\n(function (GitCommands) {\n    GitCommands[\"COMMIT\"] = \"commit\";\n    GitCommands[\"PUSH\"] = \"push\";\n    GitCommands[\"PULL\"] = \"pull\";\n    GitCommands[\"CHERRYPICK\"] = \"cherry-pick\";\n    GitCommands[\"MERGE\"] = \"merge\";\n    GitCommands[\"BRANCH\"] = \"branch\";\n})(GitCommands || (GitCommands = {}));\nexports.default = GitCommands;\n\n\n//# sourceURL=webpack://GITAna/./src/electron/core/git-commands.ts?");

/***/ }),

/***/ "./src/electron/core/git-manager.ts":
/*!******************************************!*\
  !*** ./src/electron/core/git-manager.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar executor_1 = __importDefault(__webpack_require__(/*! ./executor */ \"./src/electron/core/executor.ts\"));\nvar git_commands_1 = __importDefault(__webpack_require__(/*! ./git-commands */ \"./src/electron/core/git-commands.ts\"));\nvar GitManager = /** @class */ (function () {\n    function GitManager() {\n        this.executor = new executor_1.default();\n    }\n    GitManager.prototype.gitBaseMethod = function (gitQuery) {\n        return __awaiter(this, void 0, void 0, function () {\n            var _this = this;\n            return __generator(this, function (_a) {\n                return [2 /*return*/, new Promise(function (resolve, reject) {\n                        _this.executor.execute(gitQuery, function (buffer) {\n                            if (!!buffer) {\n                                resolve(String(buffer).split('\\n').filter(function (b) { return b !== ''; }));\n                            }\n                            else {\n                                reject(new Error('Not yet proccess'));\n                            }\n                        });\n                    })];\n            });\n        });\n    };\n    // JUST READ BUFFERS\n    GitManager.prototype.branch = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var gitQuery;\n            return __generator(this, function (_a) {\n                gitQuery = GitManager.BASE + git_commands_1.default.BRANCH;\n                return [2 /*return*/, this.gitBaseMethod(gitQuery)];\n            });\n        });\n    };\n    GitManager.prototype.pull = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var gitQuery;\n            return __generator(this, function (_a) {\n                gitQuery = GitManager.BASE + git_commands_1.default.PULL;\n                return [2 /*return*/, this.gitBaseMethod(gitQuery)];\n            });\n        });\n    };\n    GitManager.BASE = 'git '; //Contains space for make clean the query\n    return GitManager;\n}());\nexports.default = GitManager;\n\n\n//# sourceURL=webpack://GITAna/./src/electron/core/git-manager.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar electron_1 = __webpack_require__(/*! electron */ \"electron\");\nvar electron_is_dev_1 = __importDefault(__webpack_require__(/*! electron-is-dev */ \"./node_modules/electron-is-dev/index.js\")); // New Import\nvar git_manager_1 = __importDefault(__webpack_require__(/*! ./electron/core/git-manager */ \"./src/electron/core/git-manager.ts\"));\nvar win;\nvar createWindow = function () {\n    win = new electron_1.BrowserWindow({\n        width: 800,\n        height: 600,\n        webPreferences: {\n            nodeIntegration: true\n        },\n        title: \"GITAna\"\n    });\n    // console.log(isDev);\n    win.loadURL(electron_is_dev_1.default\n        ? 'http://localhost:8000'\n        : \"file://\" + electron_1.app.getAppPath() + \"/index.html\");\n    electron_is_dev_1.default ? win.webContents.openDevTools() : null;\n};\nelectron_1.app.on('ready', createWindow);\nelectron_1.app.setName('GITAna');\nvar git = new git_manager_1.default();\nelectron_1.ipcMain.on('get-branchs', function (event, arg) {\n    var getBranchs = git.branch().then(function (branchs) {\n        win.webContents.send('return-branchs', branchs);\n        event.returnValue = getBranchs;\n    });\n});\n\n\n//# sourceURL=webpack://GITAna/./src/main.ts?");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");;

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/main.ts");
/******/ })()
;