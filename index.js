// Header FadeOut

let header = document.querySelector('.header');

function fadeOutOnScroll(element) {
  if (!element) {
    return;
  }

  let distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
  let elementHeight = element.offsetHeight;
  let scrollTop = document.documentElement.scrollTop;

  let opacity = 1;

  if (scrollTop > distanceToTop) {
    opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
  }

  if (opacity >= 0) {
    element.style.opacity = opacity;
  }
}

function scrollHandler() {
  fadeOutOnScroll(header);
}

window.addEventListener('scroll', scrollHandler);


// Big hover animations


let navCellWhite = document.querySelector('.nav__cell_white');
let bottomText = document.navCellWhite(".cell__text-middle");

// function hideElement(element) {

// element.style.opacity="1";

// }


// navCellWhite.addEventListener(hover, hideElement(bottomText));
// // element.style.opacity="1";
