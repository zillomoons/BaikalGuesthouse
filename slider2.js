// SLIDER2

const sliderBox = document.querySelector('.carousel_box');
let scrollPerClick;
const btnNext = document.querySelector('#arrowRight');
const btnPrev = document.querySelector('#arrowLeft');

let scrollAmount = 0;

function sliderScrollLeft() {
    console.log('click');
    sliderBox.scrollTo({
        top: 0,
        left: (scrollAmount -= scrollPerClick),
        behavior: "smooth"
    })

    if (scrollAmount < 0) {
        scrollAmount = 0;
    }
}

function sliderScrollRight() {
    console.log('click');
    if (scrollAmount <= sliderBox.scrollWidth - sliderBox.clientWidth) {
        sliderBox.scrollTo({
            top: 0,
            right: (scrollAmount += scrollPerClick),
            behavior: "smooth"
        });
    }
}
btnPrev.addEventListener('click', sliderScrollLeft);
btnNext.addEventListener('click', sliderScrollRight);