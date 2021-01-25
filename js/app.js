const menuBtn = document.getElementById('toggleBtn');
const menuOverlay = document.querySelector('.menu_container');
//const menuList = document.querySelector('#menuList')
const body = document.querySelector('body');
const header = document.querySelector('header');

// Open mobile menu
menuBtn.addEventListener('click', function () {
    menuOverlay.classList.toggle('open');
    menuBtn.classList.toggle('active');
    body.classList.toggle('noscroll');

})
// Checks whether to collapse open mobile menu
function checkMenu() {
    if (visualViewport.width > 640 && menuOverlay.classList.contains('open')) {
        menuOverlay.classList.remove('open');
        menuBtn.classList.remove('active');
        body.classList.remove('noscroll');
    }
}

window.addEventListener('resize', checkMenu);  // If viewport expanding collapse open mobile menu
window.addEventListener('resize', menuPosition);
window.addEventListener('scroll', stickyHeader); // If scroll -- sticky header
window.addEventListener('scroll', menuPosition);


// check Menu position
function menuPosition() {
    if (window.scrollY == 0 && visualViewport.width > 1024) {
        menuOverlay.style.cssText = 'top: 3%';
    } else {
        menuOverlay.style.cssText = 'top: 0%';
    }
}
function stickyHeader() {
    header.classList.toggle('sticky', window.scrollY > 0);
}

// Removes sr-only on menuList for desktop
// function removeSR_Only() {
//     if (visualViewport.width > 1024) {
//         menuList.classList.toggle('sr-only');  // NOT TOGGLE BUT REMOVE WHEN WIDTH 1024PX
//     }
// }
//If viewport for desktop remove sr-only
//window.addEventListener('resize', removeSR_Only)