const hamburger = document.querySelector(".header__hamburger");
const hamburger_menu = document.querySelector(".header__hamburger-menu");
hamburger.addEventListener("click", () => {
    hamburger_menu.classList.toggle("header__hamburger-menu-is-active");
});
