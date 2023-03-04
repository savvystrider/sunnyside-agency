const toggleBtn = document.getElementById("toggle-btn");
const closeBtn = document.getElementById("close-btn");
const navMenu = document.getElementById("nav-menu");
const navLinks = navMenu.querySelectorAll("li");
const triangle = document.querySelector(".triangle");

toggleBtn.addEventListener("click", function(e) {
    navMenu.classList.add("show");
    triangle.classList.add("show");
    e.target.classList.add("hide");
    closeBtn.classList.add("show");
});

closeBtn.addEventListener("click", function(e) {
    navMenu.classList.remove("show");
    toggleBtn.classList.remove("hide");
    e.target.classList.remove("show");
    triangle.classList.remove("show");
});

navLinks.forEach(link => {
    link.addEventListener("click", function() {
        navMenu.classList.remove("show");
        triangle.classList.remove("show");
        closeBtn.classList.remove("show");
        toggleBtn.classList.remove("hide");
    });
});