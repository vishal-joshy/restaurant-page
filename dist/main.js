/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const createHeader = (() => {\n    const createTabs = function (tabName) {\n        const li = document.createElement('li');\n        li.textContent = tabName;\n        li.setAttribute('id', 'tabs');\n        li.setAttribute('data-value', tabName);\n        return li;\n    };\n\n    const onClickTabs = function () {\n        const tabs = document.querySelectorAll('.tabs');\n        tabs.forEach((tab) => {\n            tab.addEventListener('click', changeTab);\n        });\n    };\n\n    const changeTab = function (e) {\n        console.log(e.target);\n    };\n\n    const header = document.createElement('header');\n    const restaurantNameHeading = document.createElement('h1');\n    restaurantNameHeading.textContent = 'RESTAURANT NAME';\n\n    header.appendChild(restaurantNameHeading);\n\n    const nav = document.createElement('nav');\n\n    const ul = document.createElement('ul');\n    ul.setAttribute('class', 'tabs');\n\n    ul.appendChild(createTabs('HOME'));\n    ul.appendChild(createTabs('MENU'));\n    ul.appendChild(createTabs('CONTACT'));\n\n    nav.appendChild(ul);\n\n    header.appendChild(nav);\n\n    document.body.appendChild(header);\n\n    onClickTabs();\n})();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;