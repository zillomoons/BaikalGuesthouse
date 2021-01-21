const menuBtn = document.getElementById('toggleBtn');
const menuOverlay = document.querySelector('.menu_container');


menuBtn.addEventListener('click', function () {
    menuOverlay.classList.toggle('open');
    menuBtn.classList.toggle('active');

})
function checkMenu() {
    if (visualViewport.width > 640 && menuOverlay.classList.contains('open')) {
        menuOverlay.classList.remove('open');
        menuBtn.classList.remove('active');
    }
}
window.addEventListener('resize', checkMenu);

