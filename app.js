// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function() {
	links.classList.toggle("show-links");
});

const name = document.querySelector('#name');
const webdev = document.querySelector('.webdev');

name.addEventListener('mouseover', () => {
	webdev.classList.toggle('webdev-show');
	// webdev.classList.add('webdev-show');
});