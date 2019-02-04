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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slots__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slots */ \"./src/slots/index.js\");\n\n//import './filters';\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/slots/index.js":
/*!****************************!*\
  !*** ./src/slots/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _plugin_sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin-sidebar */ \"./src/slots/plugin-sidebar/index.js\");\n/* harmony import */ var _plugin_sidebar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_plugin_sidebar__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _plugin_sidebar_more_menu_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugin-sidebar-more-menu-item */ \"./src/slots/plugin-sidebar-more-menu-item/index.js\");\n/* harmony import */ var _plugin_sidebar_more_menu_item__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_plugin_sidebar_more_menu_item__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack:///./src/slots/index.js?");

/***/ }),

/***/ "./src/slots/plugin-sidebar-more-menu-item/index.js":
/*!**********************************************************!*\
  !*** ./src/slots/plugin-sidebar-more-menu-item/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var registerPlugin = wp.plugins.registerPlugin;\nvar _wp$editPost = wp.editPost,\n    PluginSidebar = _wp$editPost.PluginSidebar,\n    PluginSidebarMoreMenuItem = _wp$editPost.PluginSidebarMoreMenuItem;\nvar Fragment = wp.element.Fragment;\n\n\nvar PluginSidebarMoreMenuItemTest = function PluginSidebarMoreMenuItemTest() {\n\treturn wp.element.createElement(\n\t\tFragment,\n\t\tnull,\n\t\twp.element.createElement(\n\t\t\tPluginSidebarMoreMenuItem,\n\t\t\t{ target: \"sidebar-name\" },\n\t\t\t\"Expanded Sidebar - More item\"\n\t\t),\n\t\twp.element.createElement(\n\t\t\tPluginSidebar,\n\t\t\t{\n\t\t\t\tname: \"sidebar-name\",\n\t\t\t\ttitle: \"My Sidebar\" },\n\t\t\t\"Content of the sidebar\"\n\t\t)\n\t);\n};\n\nregisterPlugin('plugin-sidebar-expanded-test', { render: PluginSidebarMoreMenuItemTest });\n\n//# sourceURL=webpack:///./src/slots/plugin-sidebar-more-menu-item/index.js?");

/***/ }),

/***/ "./src/slots/plugin-sidebar/index.js":
/*!*******************************************!*\
  !*** ./src/slots/plugin-sidebar/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var registerPlugin = wp.plugins.registerPlugin;\nvar PluginSidebar = wp.editPost.PluginSidebar;\n\n\nvar PluginSidebarTest = function PluginSidebarTest() {\n\treturn wp.element.createElement(\n\t\tPluginSidebar,\n\t\t{ name: 'plugin-sidebar-test', title: 'My Plugin' },\n\t\twp.element.createElement(\n\t\t\t'p',\n\t\t\tnull,\n\t\t\t'Plugin Sidebar'\n\t\t)\n\t);\n};\nregisterPlugin('plugin-sidebar-test', { render: PluginSidebarTest });\n\n//# sourceURL=webpack:///./src/slots/plugin-sidebar/index.js?");

/***/ })

/******/ });