document.addEventListener("scroll", function() {
    const blueLogo = document.querySelector(".header__new-logo svg g#blue-logo");
    if (window.scrollY > 100) {
        blueLogo.style.display = "none"
    } else {
        blueLogo.style.display = "block"
    }
});
