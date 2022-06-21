

console.log(document.forms);


const contactForm = document.querySelector(".contact-us__form");
const contactInput = contactForm.querySelector(".contact-us__input");
const formError = contactInput.querySelector(`#${formInput.id}__error`);


contactForm.addEventListener("submit", function (evt) {
    // Отменим стандартное поведение
  evt.preventDefault();

});


// Функция, которая добавляет класс с ошибкой
const showInputError = (element, errorMessage) => {
  element.classList.add('contact-us__input_error');
  formError.classList.add('contact-us__error-msg_active');
  formError.textContent = errorMessage;

};

// Функция, которая убирает класс с ошибкой
const hideInputError = (element) => {
  element.classList.remove('contact-us__input_error');
  formError.classList.add('contact-us__error-msg_active');

};

// Функция, которая проверяет валидность поля
const isValid = () => {
  if (!contactInput.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(contactInput);
  } else {
    // Если проходит, скроем
    hideInputError(contactInput);
  }
};


contactInput.addEventListener('input', isValid);
