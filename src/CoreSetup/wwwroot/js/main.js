/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/index.d.ts" />
	"use strict";
	__webpack_require__(1);
	var Main = (function () {
	    function Main() {
	        $.get("/home/persona", function (persons) {
	            var options = {
	                dataSource: persons,
	                paging: {
	                    enabled: false,
	                },
	                showBorders: true,
	                editing: {
	                    mode: "batch",
	                    allowUpdating: true
	                },
	                filterRow: {
	                    visible: true,
	                    applyFilter: "auto"
	                },
	                searchPanel: {
	                    visible: true,
	                    width: 240,
	                    placeholder: "Search..."
	                },
	                headerFilter: {
	                    visible: true
	                },
	                onEditingStart: function (e) {
	                    console.log("EditingStart");
	                },
	                columns: [
	                    {
	                        dataField: "id",
	                        width: 50
	                    },
	                    {
	                        dataField: "type",
	                        width: 50
	                    },
	                    "name", "email"]
	            };
	            $("#gridContainer").dxDataGrid(options);
	        });
	    }
	    return Main;
	}());
	$(document).ready(function () {
	    new Main();
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map