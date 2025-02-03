window.addEventListener("scroll", function () {
	const projetosSection = document.getElementById("projetos");
	let navButtons = [
		...document.querySelectorAll(".nav-button"),
		...document.querySelectorAll(".nav-button-mobile"),
	];
	const projetosSectionTop = projetosSection.getBoundingClientRect().top;
	const windowHeight = window.innerHeight;

	if (projetosSectionTop <= windowHeight / 2) {
		navButtons.forEach((button) => {
			button.classList.remove("nav-button-light");
			button.classList.add("nav-button-dark");
		});
	} else {
		navButtons.forEach((button) => {
			button.classList.remove("nav-button-dark");
			button.classList.add("nav-button-light");
		});
	}
});

const navMobile = document.querySelector(".nav-buttons-mobile");
const closeButton = document.getElementById("close-nav");
closeButton.addEventListener("click", () => {
	navMobile.classList.remove("show");
	navMobile.classList.add("hide");
});

document.addEventListener("click", (event) => {
	if (
		!navMobile.contains(event.target) &&
		!openButton.contains(event.target)
	) {
		navMobile.classList.remove("show");
		navMobile.classList.add("hide");
	}
});

const openButton = document.getElementById("open-nav");
openButton.addEventListener("click", () => {
	navMobile.classList.remove("hide");
	navMobile.classList.add("show");
});

const navButtons = document.querySelector(".nav-buttons");
function adjustNavDisplay() {
	if (window.innerWidth <= 850) {
		navButtons.classList.remove("show");
		navButtons.classList.add("hide");
		openButton.classList.remove("hide");
		openButton.classList.add("show");
	} else {
		navButtons.classList.remove("hide");
		navButtons.classList.add("show");
		openButton.classList.remove("show");
		openButton.classList.add("hide");
		navMobile.classList.remove("show");
		navMobile.classList.add("hide");
	}
}

document.addEventListener("DOMContentLoaded", adjustNavDisplay);
window.addEventListener("resize", adjustNavDisplay);
