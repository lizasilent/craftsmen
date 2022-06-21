

console.log(document.forms);


const contactForm = document.querySelector(".contact-us__form");
const contactInput = contactForm.querySelector(".contact-us__input");
const contactError = contactInput.querySelector(`#${contactInput.id}-error`);



console.log(contactInput);




// function setEventListeners (form) {
//   // Найдём все поля формы и сделаем из них массив
// const inputList = Array.from(form.querySelectorAll(`.contact-us__input`));
//   // Найдём в текущей форме кнопку отправки
// const buttonElement = form.querySelector('.contact-us__btn');

// inputList.forEach((input) => {
//   input.addEventListener('input', () => {
//     isValid(input);

//           // Вызовем toggleButtonState и передадим ей массив полей и кнопку
//     toggleButtonState(inputList, buttonElement);
//   });
// });
// };


// function isValid (input) {
//   if (!input.validity.valid) {
//     // showInputError получает параметром форму, в которой
//     // находится проверяемое поле, и само это поле
//     showInputError(input, input.validationMessage);
//   } else {
//     // hideInputError получает параметром форму, в которой
//     // находится проверяемое поле, и само это поле
//     hideInputError(input);
//   }
// };



// function showInputError (input, error) {
//   // Находим элемент ошибки внутри самой функции
//   const contactError = contactForm.querySelector(`#${contactInput.id}-error`);
//   // Остальной код такой же
//   input.classList.add('contact-us__error-style');
//   error.classList.add('contact-us__error-msg');
//   contactError.textContent = contactError;
// };

// function hideInputError (input, error) {
//   input.classList.remove('contact-us__error-style');
//   error.classList.remove('contact-us__error-msg');
//   contactError.textContent = "";

// };


// const enableValidation = () => {
//   // Найдём все формы с указанным классом в DOM,
//   // сделаем из них массив методом Array.from
//   const formList = Array.from(document.querySelectorAll('.form'));

//   // Переберём полученную коллекцию
//   formList.forEach((contactForm) => {
//     contactForm.addEventListener('submit', (evt) => {
//       // У каждой формы отменим стандартное поведение
//       evt.preventDefault();
//     });

//     // Для каждой формы вызовем функцию setEventListeners,
//     // передав ей элемент формы
//     setEventListeners(contactForm);
//   });
// };

// // Вызовем функцию
// enableValidation();

// const hasInvalidInput = (inputList) => {
//   // проходим по этому массиву методом some
//   return inputList.some((contactInput) => {
//         // Если поле не валидно, колбэк вернёт true
//     // Обход массива прекратится и вся фунцкция
//     // hasInvalidInput вернёт true

//     return !contactInput.validity.valid;
//   })
// };


// // Функция принимает массив полей ввода
// // и элемент кнопки, состояние которой нужно менять

// const toggleButtonState = (inputList, buttonElement) => {
//   // Если есть хотя бы один невалидный инпут
//   if (hasInvalidInput(inputList)) {
//     // сделай кнопку неактивной
//     buttonElement.classList.add('form__submit_inactive');
//   } else {
//         // иначе сделай кнопку активной
//     buttonElement.classList.remove('form__submit_inactive');
//   }
// };



