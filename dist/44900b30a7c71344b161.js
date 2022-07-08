// Функция isValid теперь принимает formElement и inputElement,
// а не берёт их из внешней области видимости
var isValid = function isValid(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    // showInputError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

var showInputError = function showInputError(formElement, inputElement, errorMessage) {
  // Находим элемент ошибки внутри самой функции
  var errorElement = formElement.querySelector("#".concat(inputElement.id, "-error")); // Показываем ошибку, заменяем текст ошибки на системный, подсвечиваем поле

  inputElement.classList.add('contact-us__error-style');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('contact-us__error-msg_active');
};

var hideInputError = function hideInputError(formElement, inputElement) {
  var errorElement = formElement.querySelector("#".concat(inputElement.id, "-error"));
  inputElement.classList.remove('contact-us__error-style');
  errorElement.classList.remove('contact-us__error-msg_active');
  errorElement.textContent = '';
};

var setEventListeners = function setEventListeners(formElement) {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  var inputList = Array.from(formElement.querySelectorAll('.contact-us__input'));
  var buttonElement = formElement.querySelector('.contact-us__btn'); // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля

  toggleButtonState(inputList, buttonElement); // Обойдём все элементы полученной коллекции

  inputList.forEach(function (inputElement) {
    // каждому полю добавим обработчик события input
    inputElement.addEventListener('input', function () {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      isValid(formElement, inputElement);
    }); // Вызовем toggleButtonState и передадим ей массив полей и кнопку

    toggleButtonState(inputList, buttonElement);
  });
}; // Функция принимает массив полей


var hasInvalidInput = function hasInvalidInput(inputList) {
  // проходим по этому массиву методом some
  return inputList.some(function (inputElement) {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся фунцкция
    // hasInvalidInput вернёт true
    return !inputElement.validity.valid;
  });
}; // Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять


var toggleButtonState = function toggleButtonState(inputList, buttonElement) {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonElement.classList.add('contact-us__btn_inactive');
  } else {
    // иначе сделай кнопку активной
    buttonElement.classList.remove('contact-us__btn_inactive');
  }
}; //На случай если будет больше форм


var enableValidation = function enableValidation() {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  var formList = Array.from(document.querySelectorAll('.form')); // Переберём полученную коллекцию

  formList.forEach(function (formElement) {
    formElement.addEventListener('submit', function (evt) {
      // У каждой формы отменим стандартное поведение
      evt.preventDefault();
    }); // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы

    setEventListeners(formElement);
  });
}; // Вызовем функцию


enableValidation();