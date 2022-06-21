

console.log(document.forms);


const contactForm = document.querySelector(".contact-us__form");
const contactInput = contactForm.querySelector(".contact-us__input");


contactForm.addEventListener("submit", function (evt) {
    // Отменим стандартное поведение
  evt.preventDefault();

});


contactInput.addEventListener('input', function (evt) {
    // Выведем в консоль значение свойства validity.valid поля ввода,
    // на котором слушаем событие input
    console.log(evt.target.validity.valid);

  });

