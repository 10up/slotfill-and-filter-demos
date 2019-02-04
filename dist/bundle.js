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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _plugin_sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin-sidebar */ \"./src/slots/plugin-sidebar/index.js\");\n/* harmony import */ var _plugin_sidebar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_plugin_sidebar__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _plugin_more_menu_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugin-more-menu-item */ \"./src/slots/plugin-more-menu-item/index.js\");\n/* harmony import */ var _plugin_more_menu_item__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_plugin_more_menu_item__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _plugin_sidebar_more_menu_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugin-sidebar-more-menu-item */ \"./src/slots/plugin-sidebar-more-menu-item/index.js\");\n/* harmony import */ var _plugin_sidebar_more_menu_item__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_plugin_sidebar_more_menu_item__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _plugin_post_status_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugin-post-status-info */ \"./src/slots/plugin-post-status-info/index.js\");\n/* harmony import */ var _plugin_post_status_info__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_plugin_post_status_info__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _plugin_block_settings_menu_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugin-block-settings-menu-item */ \"./src/slots/plugin-block-settings-menu-item/index.js\");\n/* harmony import */ var _plugin_block_settings_menu_item__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_plugin_block_settings_menu_item__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _plugin_pre_post_publish_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plugin-pre-post-publish-panel */ \"./src/slots/plugin-pre-post-publish-panel/index.js\");\n/* harmony import */ var _plugin_pre_post_publish_panel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_plugin_pre_post_publish_panel__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _plugin_post_publish_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plugin-post-publish-panel */ \"./src/slots/plugin-post-publish-panel/index.js\");\n/* harmony import */ var _plugin_post_publish_panel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_plugin_post_publish_panel__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/slots/index.js?");

/***/ }),

/***/ "./src/slots/plugin-block-settings-menu-item/index.js":
/*!************************************************************!*\
  !*** ./src/slots/plugin-block-settings-menu-item/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var registerPlugin = wp.plugins.registerPlugin;\nvar PluginBlockSettingsMenuItem = wp.editPost.PluginBlockSettingsMenuItem;\n\n\nvar PluginBlockSettingsMenuGroupTest = function PluginBlockSettingsMenuGroupTest() {\n\treturn wp.element.createElement(PluginBlockSettingsMenuItem, {\n\t\tallowedBlockNames: 'core/paragraph',\n\t\ticon: 'smiley',\n\t\tlabel: 'Menu item text',\n\t\tonClick: function onClick() {\n\t\t\talert('clicked');\n\t\t} });\n};\n\nregisterPlugin('block-settings-menu-group-test', { render: PluginBlockSettingsMenuGroupTest });\n\n//# sourceURL=webpack:///./src/slots/plugin-block-settings-menu-item/index.js?");

/***/ }),

/***/ "./src/slots/plugin-more-menu-item/index.js":
/*!**************************************************!*\
  !*** ./src/slots/plugin-more-menu-item/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var registerPlugin = wp.plugins.registerPlugin;\nvar PluginMoreMenuItem = wp.editPost.PluginMoreMenuItem;\n\n\nvar MyButtonMoreMenuItemTest = function MyButtonMoreMenuItemTest() {\n\treturn wp.element.createElement(\n\t\tPluginMoreMenuItem,\n\t\t{\n\t\t\ticon: 'smiley',\n\t\t\tonClick: function onClick() {\n\t\t\t\talert('Button Clicked');\n\t\t\t}\n\t\t},\n\t\t'More Menu Item'\n\t);\n};\n\nregisterPlugin('more-menu-item-test', { render: MyButtonMoreMenuItemTest });\n\n//# sourceURL=webpack:///./src/slots/plugin-more-menu-item/index.js?");

/***/ }),

/***/ "./src/slots/plugin-post-publish-panel/index.js":
/*!******************************************************!*\
  !*** ./src/slots/plugin-post-publish-panel/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var registerPlugin = wp.plugins.registerPlugin;\nvar PluginPostPublishPanel = wp.editPost.PluginPostPublishPanel;\n\n\nvar PluginPostPublishPanelTest = function PluginPostPublishPanelTest() {\n\treturn wp.element.createElement(\n\t\tPluginPostPublishPanel,\n\t\tnull,\n\t\twp.element.createElement(\n\t\t\t'p',\n\t\t\tnull,\n\t\t\t'Post Publish Panel'\n\t\t)\n\t);\n};\n\nregisterPlugin('post-publish-panel-test', { render: PluginPostPublishPanelTest });\n\n//# sourceURL=webpack:///./src/slots/plugin-post-publish-panel/index.js?");

/***/ }),

/***/ "./src/slots/plugin-post-status-info/index.js":
/*!****************************************************!*\
  !*** ./src/slots/plugin-post-status-info/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var registerPlugin = wp.plugins.registerPlugin;\nvar PluginPostStatusInfo = wp.editPost.PluginPostStatusInfo;\n\n\nvar PluginPostStatusInfoTest = function PluginPostStatusInfoTest() {\n\treturn wp.element.createElement(\n\t\tPluginPostStatusInfo,\n\t\tnull,\n\t\twp.element.createElement(\n\t\t\t'p',\n\t\t\tnull,\n\t\t\t'Post Status Info SlotFill'\n\t\t)\n\t);\n};\n\nregisterPlugin('post-status-info-test', { render: PluginPostStatusInfoTest });\n\n//# sourceURL=webpack:///./src/slots/plugin-post-status-info/index.js?");

/***/ }),

/***/ "./src/slots/plugin-pre-post-publish-panel/index.js":
/*!**********************************************************!*\
  !*** ./src/slots/plugin-pre-post-publish-panel/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var registerPlugin = wp.plugins.registerPlugin;\nvar PluginPrePublishPanel = wp.editPost.PluginPrePublishPanel;\n\n\nvar PluginPrePublishPanelTest = function PluginPrePublishPanelTest() {\n\treturn wp.element.createElement(\n\t\tPluginPrePublishPanel,\n\t\tnull,\n\t\twp.element.createElement(\n\t\t\t'p',\n\t\t\tnull,\n\t\t\t' Pre Publish Panel '\n\t\t)\n\t);\n};\n\nregisterPlugin('pre-publish-panel-test', { render: PluginPrePublishPanelTest });\n\n//# sourceURL=webpack:///./src/slots/plugin-pre-post-publish-panel/index.js?");

/***/ }),

/***/ "./src/slots/plugin-sidebar-more-menu-item/index.js":
/*!**********************************************************!*\
  !*** ./src/slots/plugin-sidebar-more-menu-item/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var registerPlugin = wp.plugins.registerPlugin;\nvar _wp$editPost = wp.editPost,\n    PluginSidebar = _wp$editPost.PluginSidebar,\n    PluginSidebarMoreMenuItem = _wp$editPost.PluginSidebarMoreMenuItem;\nvar Fragment = wp.element.Fragment;\n\n\nvar PluginSidebarMoreMenuItemTest = function PluginSidebarMoreMenuItemTest() {\n\treturn wp.element.createElement(\n\t\tFragment,\n\t\tnull,\n\t\twp.element.createElement(\n\t\t\tPluginSidebarMoreMenuItem,\n\t\t\t{\n\t\t\t\ttarget: \"sidebar-name\",\n\t\t\t\ticon: \"smiley\"\n\t\t\t},\n\t\t\t\"Expanded Sidebar - More item\"\n\t\t),\n\t\twp.element.createElement(\n\t\t\tPluginSidebar,\n\t\t\t{\n\t\t\t\tname: \"sidebar-name\",\n\t\t\t\ticon: \"smiley\",\n\t\t\t\ttitle: \"My Sidebar\" },\n\t\t\t\"Content of the sidebar\"\n\t\t)\n\t);\n};\n\nregisterPlugin('plugin-sidebar-expanded-test', { render: PluginSidebarMoreMenuItemTest });\n\n//# sourceURL=webpack:///./src/slots/plugin-sidebar-more-menu-item/index.js?");

/***/ }),

/***/ "./src/slots/plugin-sidebar/index.js":
/*!*******************************************!*\
  !*** ./src/slots/plugin-sidebar/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var registerPlugin = wp.plugins.registerPlugin;\nvar PluginSidebar = wp.editPost.PluginSidebar;\n\n\nvar PluginSidebarTest = function PluginSidebarTest() {\n\treturn wp.element.createElement(\n\t\tPluginSidebar,\n\t\t{\n\t\t\tname: 'plugin-sidebar-test',\n\t\t\ttitle: 'My Plugin',\n\t\t\ticon: 'smiley'\n\t\t},\n\t\twp.element.createElement(\n\t\t\t'p',\n\t\t\tnull,\n\t\t\t'Plugin Sidebar'\n\t\t)\n\t);\n};\nregisterPlugin('plugin-sidebar-test', { render: PluginSidebarTest });\n\n//# sourceURL=webpack:///./src/slots/plugin-sidebar/index.js?");

/***/ })

/******/ });