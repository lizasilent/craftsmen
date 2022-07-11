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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _validation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation.js */ \"./src/validation.js\");\n/* harmony import */ var _validation_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_validation_js__WEBPACK_IMPORTED_MODULE_1__);\n\n // Header FadeOut\n\nvar header = document.querySelector('.header');\n\nfunction fadeOutOnScroll(element) {\n  if (!element) {\n    return;\n  }\n\n  var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;\n  var elementHeight = element.offsetHeight;\n  var scrollTop = document.documentElement.scrollTop;\n  var opacity = 1;\n\n  if (scrollTop > distanceToTop) {\n    opacity = 1 - (scrollTop - distanceToTop) / elementHeight;\n  }\n\n  if (opacity >= 0) {\n    element.style.opacity = opacity;\n  }\n}\n\nfunction scrollHandler() {\n  fadeOutOnScroll(header);\n}\n\nwindow.addEventListener('scroll', scrollHandler);\nvar numbers = [2, 3, 5]; // Стрелочная функция. Не запнётся ли на ней Internet Explorer?\n\nvar doubledNumbers = numbers.map(function (number) {\n  return number * 2;\n});\nconsole.log(doubledNumbers); // 4, 6, 10\n\n//# sourceURL=webpack://craftsmen/./src/index.js?");

/***/ }),

/***/ "./src/validation.js":
/*!***************************!*\
  !*** ./src/validation.js ***!
  \***************************/
/***/ (() => {

eval("// Функция isValid теперь принимает formElement и inputElement,\n// а не берёт их из внешней области видимости\nconsole.log(\"все подключено\");\n\nvar isValid = function isValid(formElement, inputElement) {\n  if (!inputElement.validity.valid) {\n    // showInputError теперь получает параметром форму, в которой\n    // находится проверяемое поле, и само это поле\n    showInputError(formElement, inputElement, inputElement.validationMessage);\n  } else {\n    hideInputError(formElement, inputElement);\n  }\n};\n\nvar showInputError = function showInputError(formElement, inputElement, errorMessage) {\n  // Находим элемент ошибки внутри самой функции\n  var errorElement = formElement.querySelector(\"#\".concat(inputElement.id, \"-error\"));\n  console.log(\"есть ошибка\"); // Показываем ошибку, заменяем текст ошибки на системный, подсвечиваем поле\n\n  inputElement.classList.add('contact-us__error-style');\n  errorElement.textContent = errorMessage;\n  errorElement.classList.add('contact-us__error-msg_active');\n};\n\nvar hideInputError = function hideInputError(formElement, inputElement) {\n  var errorElement = formElement.querySelector(\"#\".concat(inputElement.id, \"-error\"));\n  inputElement.classList.remove('contact-us__error-style');\n  errorElement.classList.remove('contact-us__error-msg_active');\n  errorElement.textContent = '';\n};\n\nvar setEventListeners = function setEventListeners(formElement) {\n  // Находим все поля внутри формы,\n  // сделаем из них массив методом Array.from\n  var inputList = Array.from(formElement.querySelectorAll('.contact-us__input'));\n  var buttonElement = formElement.querySelector('.contact-us__btn'); // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля\n\n  toggleButtonState(inputList, buttonElement); // Обойдём все элементы полученной коллекции\n\n  inputList.forEach(function (inputElement) {\n    // каждому полю добавим обработчик события input\n    inputElement.addEventListener('input', function () {\n      // Внутри колбэка вызовем isValid,\n      // передав ей форму и проверяемый элемент\n      isValid(formElement, inputElement);\n    }); // Вызовем toggleButtonState и передадим ей массив полей и кнопку\n\n    toggleButtonState(inputList, buttonElement);\n  });\n}; // Функция принимает массив полей\n\n\nvar hasInvalidInput = function hasInvalidInput(inputList) {\n  // проходим по этому массиву методом some\n  return inputList.some(function (inputElement) {\n    // Если поле не валидно, колбэк вернёт true\n    // Обход массива прекратится и вся фунцкция\n    // hasInvalidInput вернёт true\n    return !inputElement.validity.valid;\n  });\n}; // Функция принимает массив полей ввода\n// и элемент кнопки, состояние которой нужно менять\n\n\nvar toggleButtonState = function toggleButtonState(inputList, buttonElement) {\n  // Если есть хотя бы один невалидный инпут\n  if (hasInvalidInput(inputList)) {\n    // сделай кнопку неактивной\n    buttonElement.classList.add('contact-us__btn_inactive');\n  } else {\n    // иначе сделай кнопку активной\n    buttonElement.classList.remove('contact-us__btn_inactive');\n  }\n}; //На случай если будет больше форм\n\n\nvar enableValidation = function enableValidation() {\n  // Найдём все формы с указанным классом в DOM,\n  // сделаем из них массив методом Array.from\n  var formList = Array.from(document.querySelectorAll('.form')); // Переберём полученную коллекцию\n\n  formList.forEach(function (formElement) {\n    formElement.addEventListener('submit', function (evt) {\n      // У каждой формы отменим стандартное поведение\n      evt.preventDefault();\n    }); // Для каждой формы вызовем функцию setEventListeners,\n    // передав ей элемент формы\n\n    setEventListeners(formElement);\n  });\n}; // Вызовем функцию\n\n\nenableValidation();\n\n//# sourceURL=webpack://craftsmen/./src/validation.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://craftsmen/./src/index.css?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;