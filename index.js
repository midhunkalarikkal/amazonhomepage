const openmenubtn = document.getElementById("side-menu-open");
const menuclose = document.getElementById("side-menu-close-btn");
const sidemenu = document.getElementById("side-menu");

openmenubtn.addEventListener('click', function () {
    sidemenu.classList.add('open');
});

menuclose.addEventListener('click', function () {
    sidemenu.classList.remove('open');
});