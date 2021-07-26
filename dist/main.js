/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const contactContent = () => {
    const contactCard = document.createElement('div');
    contactCard.textContent = 'contact content';
    return contactCard;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactContent);


/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const homeContent = () => {
    const homeContent = document.createElement('div');
    homeContent.textContent = 'Home Content';
    return homeContent;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeContent);


/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createMenuCard = function (name) {
    const menuCard = document.createElement('div');
    const itemName = document.createElement('h2');
    itemName.textContent = name;
    menuCard.appendChild(itemName);
    return menuCard;
};

const menuContent = function () {
    const menuList = document.createElement('div');
    menuList.appendChild(createMenuCard('Item 1'));
    menuList.appendChild(createMenuCard('Item 2'));
    menuList.appendChild(createMenuCard('Item 3'));
    menuList.appendChild(createMenuCard('Item 4'));
    return menuList;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuContent);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/contact */ "./src/modules/contact.js");
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");




const createHeader = (() => {
    const createTabs = function (tabName) {
        const li = document.createElement('li');
        li.textContent = tabName;
        li.setAttribute('id', 'tabs');
        li.setAttribute('data-content', tabName);
        return li;
    };

    const onClickTabs = function (callback) {
        const tabs = document.querySelectorAll('.tabs');
        tabs.forEach((tab) => {
            tab.addEventListener('click', callback);
        });
    };

    const changeTab = function (e) {
        const content = document.querySelector('#content');
        content.innerHTML = '';
        console.log(e.target.dataset.content);
        switch (e.target.dataset.content) {
            case 'HOME':
                content.appendChild((0,_modules_home__WEBPACK_IMPORTED_MODULE_1__.default)());
                break;
            case 'MENU':
                content.appendChild((0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__.default)());
                break;
            case 'CONTACT':
                content.appendChild((0,_modules_contact__WEBPACK_IMPORTED_MODULE_0__.default)());
        }
    };

    const header = document.createElement('header');
    const restaurantNameHeading = document.createElement('h1');
    restaurantNameHeading.textContent = 'RESTAURANT NAME';

    header.appendChild(restaurantNameHeading);

    const nav = document.createElement('nav');

    const ul = document.createElement('ul');
    ul.setAttribute('class', 'tabs');

    ul.appendChild(createTabs('HOME'));
    ul.appendChild(createTabs('MENU'));
    ul.appendChild(createTabs('CONTACT'));

    nav.appendChild(ul);

    header.appendChild(nav);

    document.body.insertBefore(header, document.querySelector('#content'));
    document.querySelector('#content').appendChild((0,_modules_home__WEBPACK_IMPORTED_MODULE_1__.default)());
    onClickTabs(changeTab);
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDTjlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNOM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7OztVQ2hCM0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7OztBQ04rQztBQUNOO0FBQ0E7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHNEQUFXO0FBQy9DO0FBQ0E7QUFDQSxvQ0FBb0Msc0RBQVc7QUFDL0M7QUFDQTtBQUNBLG9DQUFvQyx5REFBYztBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLG1EQUFtRCxzREFBVztBQUM5RDtBQUNBLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRhY3RDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdENhcmQudGV4dENvbnRlbnQgPSAnY29udGFjdCBjb250ZW50JztcbiAgICByZXR1cm4gY29udGFjdENhcmQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0Q29udGVudDtcbiIsImNvbnN0IGhvbWVDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGhvbWVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZUNvbnRlbnQudGV4dENvbnRlbnQgPSAnSG9tZSBDb250ZW50JztcbiAgICByZXR1cm4gaG9tZUNvbnRlbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBob21lQ29udGVudDtcbiIsImNvbnN0IGNyZWF0ZU1lbnVDYXJkID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBjb25zdCBtZW51Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgbWVudUNhcmQuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgIHJldHVybiBtZW51Q2FyZDtcbn07XG5cbmNvbnN0IG1lbnVDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUNhcmQoJ0l0ZW0gMScpKTtcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChjcmVhdGVNZW51Q2FyZCgnSXRlbSAyJykpO1xuICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVDYXJkKCdJdGVtIDMnKSk7XG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUNhcmQoJ0l0ZW0gNCcpKTtcbiAgICByZXR1cm4gbWVudUxpc3Q7XG59O1xuZXhwb3J0IGRlZmF1bHQgbWVudUNvbnRlbnQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjb250YWN0Q29udGVudCBmcm9tICcuL21vZHVsZXMvY29udGFjdCc7XG5pbXBvcnQgaG9tZUNvbnRlbnQgZnJvbSAnLi9tb2R1bGVzL2hvbWUnO1xuaW1wb3J0IG1lbnVDb250ZW50IGZyb20gJy4vbW9kdWxlcy9tZW51JztcblxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVUYWJzID0gZnVuY3Rpb24gKHRhYk5hbWUpIHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaS50ZXh0Q29udGVudCA9IHRhYk5hbWU7XG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFicycpO1xuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGVudCcsIHRhYk5hbWUpO1xuICAgICAgICByZXR1cm4gbGk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uQ2xpY2tUYWJzID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFicycpO1xuICAgICAgICB0YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2hhbmdlVGFiID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmRhdGFzZXQuY29udGVudCk7XG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQuZGF0YXNldC5jb250ZW50KSB7XG4gICAgICAgICAgICBjYXNlICdIT01FJzpcbiAgICAgICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVDb250ZW50KCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnTUVOVSc6XG4gICAgICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51Q29udGVudCgpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0NPTlRBQ1QnOlxuICAgICAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRlbnQoKSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgcmVzdGF1cmFudE5hbWVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICByZXN0YXVyYW50TmFtZUhlYWRpbmcudGV4dENvbnRlbnQgPSAnUkVTVEFVUkFOVCBOQU1FJztcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZUhlYWRpbmcpO1xuXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgdWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YWJzJyk7XG5cbiAgICB1bC5hcHBlbmRDaGlsZChjcmVhdGVUYWJzKCdIT01FJykpO1xuICAgIHVsLmFwcGVuZENoaWxkKGNyZWF0ZVRhYnMoJ01FTlUnKSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQoY3JlYXRlVGFicygnQ09OVEFDVCcpKTtcblxuICAgIG5hdi5hcHBlbmRDaGlsZCh1bCk7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGhlYWRlciwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hcHBlbmRDaGlsZChob21lQ29udGVudCgpKTtcbiAgICBvbkNsaWNrVGFicyhjaGFuZ2VUYWIpO1xufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=