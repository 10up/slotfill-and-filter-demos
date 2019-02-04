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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slots__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slots */ \"./src/slots/index.js\");\n //import './filters';\n\n//# sourceURL=webpack:///./src/app.js?");

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

eval("var registerPlugin = wp.plugins.registerPlugin;\nvar PluginBlockSettingsMenuItem = wp.editPost.PluginBlockSettingsMenuItem;\n\nvar PluginBlockSettingsMenuGroupTest = function PluginBlockSettingsMenuGroupTest() {\n  return React.createElement(PluginBlockSettingsMenuItem, {\n    allowedBlockNames: \"core/paragraph\",\n    icon: \"smiley\",\n    label: \"Menu item text\",\n    onClick: function onClick() {\n      alert('clicked');\n    }\n  });\n};\n\nregisterPlugin('block-settings-menu-group-test', {\n  render: PluginBlockSettingsMenuGroupTest\n});\n\n//# sourceURL=webpack:///./src/slots/plugin-block-settings-menu-item/index.js?");

/***/ }),

/***/ "./src/slots/plugin-more-menu-item/index.js":
/*!**************************************************!*\
  !*** ./src/slots/plugin-more-menu-item/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var registerPlugin = wp.plugins.registerPlugin;\nvar PluginMoreMenuItem = wp.editPost.PluginMoreMenuItem;\n\nvar MyButtonMoreMenuItemTest = function MyButtonMoreMenuItemTest() {\n  return React.createElement(PluginMoreMenuItem, {\n    icon: \"smiley\",\n    onClick: function onClick() {\n      alert('Button Clicked');\n    }\n  }, \"More Menu Item\");\n};\n\nregisterPlugin('more-menu-item-test', {\n  render: MyButtonMoreMenuItemTest\n});\n\n//# sourceURL=webpack:///./src/slots/plugin-more-menu-item/index.js?");

/***/ }),

/***/ "./src/slots/plugin-post-publish-panel/index.js":
/*!******************************************************!*\
  !*** ./src/slots/plugin-post-publish-panel/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var registerPlugin = wp.plugins.registerPlugin;\nvar PluginPostPublishPanel = wp.editPost.PluginPostPublishPanel;\n\nvar PluginPostPublishPanelTest = function PluginPostPublishPanelTest() {\n  return React.createElement(PluginPostPublishPanel, null, React.createElement(\"p\", null, \"Post Publish Panel\"));\n};\n\nregisterPlugin('post-publish-panel-test', {\n  render: PluginPostPublishPanelTest\n});\n\n//# sourceURL=webpack:///./src/slots/plugin-post-publish-panel/index.js?");

/***/ }),

/***/ "./src/slots/plugin-post-status-info/index.js":
/*!****************************************************!*\
  !*** ./src/slots/plugin-post-status-info/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var registerPlugin = wp.plugins.registerPlugin;\nvar PluginPostStatusInfo = wp.editPost.PluginPostStatusInfo;\n\nvar PluginPostStatusInfoTest = function PluginPostStatusInfoTest() {\n  return React.createElement(PluginPostStatusInfo, null, React.createElement(\"p\", null, \"Post Status Info SlotFill\"));\n};\n\nregisterPlugin('post-status-info-test', {\n  render: PluginPostStatusInfoTest\n});\n\n//# sourceURL=webpack:///./src/slots/plugin-post-status-info/index.js?");

/***/ }),

/***/ "./src/slots/plugin-pre-post-publish-panel/index.js":
/*!**********************************************************!*\
  !*** ./src/slots/plugin-pre-post-publish-panel/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var registerPlugin = wp.plugins.registerPlugin;\nvar PluginPrePublishPanel = wp.editPost.PluginPrePublishPanel;\n\nvar PluginPrePublishPanelTest = function PluginPrePublishPanelTest() {\n  return React.createElement(PluginPrePublishPanel, null, React.createElement(\"p\", null, \" Pre Publish Panel \"));\n};\n\nregisterPlugin('pre-publish-panel-test', {\n  render: PluginPrePublishPanelTest\n});\n\n//# sourceURL=webpack:///./src/slots/plugin-pre-post-publish-panel/index.js?");

/***/ }),

/***/ "./src/slots/plugin-sidebar-more-menu-item/index.js":
/*!**********************************************************!*\
  !*** ./src/slots/plugin-sidebar-more-menu-item/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var registerPlugin = wp.plugins.registerPlugin;\nvar _wp$editPost = wp.editPost,\n    PluginSidebar = _wp$editPost.PluginSidebar,\n    PluginSidebarMoreMenuItem = _wp$editPost.PluginSidebarMoreMenuItem;\nvar Fragment = wp.element.Fragment;\n\nvar PluginSidebarMoreMenuItemTest = function PluginSidebarMoreMenuItemTest() {\n  return React.createElement(Fragment, null, React.createElement(PluginSidebarMoreMenuItem, {\n    target: \"sidebar-name\",\n    icon: \"smiley\"\n  }, \"Expanded Sidebar - More item\"), React.createElement(PluginSidebar, {\n    name: \"sidebar-name\",\n    icon: \"smiley\",\n    title: \"My Sidebar\"\n  }, \"Content of the sidebar\"));\n};\n\nregisterPlugin('plugin-sidebar-expanded-test', {\n  render: PluginSidebarMoreMenuItemTest\n});\n\n//# sourceURL=webpack:///./src/slots/plugin-sidebar-more-menu-item/index.js?");

/***/ }),

/***/ "./src/slots/plugin-sidebar/index.js":
/*!*******************************************!*\
  !*** ./src/slots/plugin-sidebar/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var registerPlugin = wp.plugins.registerPlugin;\nvar PluginSidebar = wp.editPost.PluginSidebar;\n\nvar PluginSidebarTest = function PluginSidebarTest() {\n  return React.createElement(PluginSidebar, {\n    name: \"plugin-sidebar-test\",\n    title: \"My Plugin\",\n    icon: \"smiley\"\n  }, React.createElement(\"p\", null, \"Plugin Sidebar\"));\n};\n\nregisterPlugin('plugin-sidebar-test', {\n  render: PluginSidebarTest\n});\n\n//# sourceURL=webpack:///./src/slots/plugin-sidebar/index.js?");

/***/ })

/******/ });