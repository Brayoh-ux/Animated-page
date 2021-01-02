var hamburger_menu = document.querySelector(".humburger-menu");
var container = document.querySelector(".container-fluid");

hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
})