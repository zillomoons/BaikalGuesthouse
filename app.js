const menuBtn = document.getElementById('toggleBtn');
const menuOverlay = document.querySelector('.menu_container');

// Open mobile menu
menuBtn.addEventListener('click', function () {
    menuOverlay.classList.toggle('open');
    menuBtn.classList.toggle('active');

})
// Checks whether to collapse open mobile menu
function checkMenu() {
    if (visualViewport.width > 640 && menuOverlay.classList.contains('open')) {
        menuOverlay.classList.remove('open');
        menuBtn.classList.remove('active');
    }
}
// If viewport expanding collapse open mobile menu
window.addEventListener('resize', checkMenu);

// If scroll -- sticky header
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
    if (window.scrollY > 0) {
        menuOverlay.style.cssText = 'top: 0%';
    } else {
        menuOverlay.style.cssText = 'top: 3%';
    }

})

