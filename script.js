

// navbar
let nav = document.querySelector(".nav");
// let before_btn = document.querySelector(".before")
// let after_btn = document.querySelector(".after");

window.addEventListener("scroll", () => {
if (scrollY > 0) {
nav.classList.add("scrolll");
} else {
nav.classList.remove("scrolll");
}
});



// testmonials

let slideIndex = 0;
showSlides();
function showSlides() {
	let i;
	let slides = document.getElementsByClassName("container_test");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) { slideIndex = 1 }
	slides[slideIndex - 1].style.display = "flex";
	setTimeout(showSlides, 2000);
}

