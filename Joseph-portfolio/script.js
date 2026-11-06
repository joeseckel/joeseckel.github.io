// =================================
// AUTOMATIC COPYRIGHT YEAR
// =================================

const year = document.getElementById("year");

if (year) {
year.textContent = new Date().getFullYear();
}


// =================================
// SMOOTH SCROLLING
// =================================

const navigationLinks = document.querySelectorAll(
'a[href^="#"]'
);

navigationLinks.forEach(function(link) {

link.addEventListener("click", function(event) {

const section = document.querySelector(
this.getAttribute("href")
);

if (section) {

event.preventDefault();

section.scrollIntoView({
behavior: "smooth"
});

}

});

});


// =================================
// MOBILE NAVIGATION
// =================================

const navLinks = document.querySelectorAll(
".navbar-nav .nav-link"
);

navLinks.forEach(function(link) {

link.addEventListener("click", function() {

const menu = document.getElementById("navbarNav");

if (menu && menu.classList.contains("show")) {

bootstrap.Collapse
.getOrCreateInstance(menu)
.hide();

}

});

});


// =================================
// PRINT / SAVE RESUME
// =================================

function printResume() {

window.print();

}