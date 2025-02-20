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

function aplicarEfeitoHover(
	ativadorSelector,
	classesAlvoSelectors,
	estilosHover,
	estiloPadrao
) {
	const ativador = document.querySelector(ativadorSelector);
	const classesAlvo = classesAlvoSelectors.map((selector) =>
		document.querySelector(selector)
	);
	const todosBgElements = document.querySelectorAll(
		'.empresa-sistemapet [class$="-bg"]'
	);

	todosBgElements.forEach((el) => {
		el.dataset.originalDisplay = window.getComputedStyle(el).display;
	});

	function aplicarEstilos(elemento, estilos) {
		Object.assign(elemento.style, estilos);
	}

	ativador.addEventListener("mouseover", () => {
		aplicarEstilos(document.querySelector(".empresa"), {
			backgroundColor: estilosHover.backgroundColor,
		});

		classesAlvo.forEach((elemento, index) => {
			if (elemento) {
				aplicarEstilos(
					elemento,
					estilosHover[Object.keys(estilosHover)[index + 1]]
				);
				elemento.style.display = elemento.dataset.originalDisplay;
			}
		});
	});

	ativador.addEventListener("mouseout", () => {
		aplicarEstilos(document.querySelector(".empresa"), {
			backgroundColor: estiloPadrao.backgroundColor,
		});

		todosBgElements.forEach((el) => {
			aplicarEstilos(el, estiloPadrao);
			el.style.display = el.dataset.originalDisplay;
		});
	});
}


const estiloPadrao = {
	backgroundColor: "#fff",
	color: "#000",
};

const estilosHoverChatbot = {
	backgroundColor: "#f5f5f5",
	php: { backgroundColor: "#4c4e73", color: "#fff" },
	typescript: { backgroundColor: "#17395d", color: "#fff" },
	mysql: { backgroundColor: "#00758f", color: "#fff" },
	laravel: { backgroundColor: "#ff2d20", color: "#fff" },
	react: { backgroundColor: "#306d7e", color: "#fff" },
	next: { backgroundColor: "#000000", color: "#fff" },
	python: { backgroundColor: "#18354d", color: "#fff" },
	git: { backgroundColor: "#141414", color: "#fff" },
};
aplicarEfeitoHover(
	".chatbot",
	[
		".php-bg",
		".typescript-bg",
		".mysql-bg",
		".laravel-bg",
		".react-bg",
		".next-bg",
		".python-bg",
		".git-bg",
	],
	estilosHoverChatbot,
	estiloPadrao
);

const estilosHoverAppMobile = {
	backgroundColor: "#f5f5f5",
	php: { backgroundColor: "#4c4e73", color: "#fff" },
	mysql: { backgroundColor: "#00758f", color: "#fff" },
	laravel: { backgroundColor: "#ff2d20", color: "#fff" },
	reactnative: { backgroundColor: "#306d7e", color: "#fff" },
	git: { backgroundColor: "#141414", color: "#fff" },
	typescript: { backgroundColor: "#17395d", color: "#fff" },
	figma: { backgroundColor: "#f24e1e", color: "#fff" },
	apache: { backgroundColor: "#cc3333", color: "#fff" },
};
aplicarEfeitoHover(
	".sistemapet-criadores",
	[
		".php-bg",
		".mysql-bg",
		".laravel-bg",
		".react-native-bg",
		".git-bg",
		".typescript-bg",
		".figma-bg",
		".apache-bg",
	],
	estilosHoverAppMobile,
	estiloPadrao
);

const estilosHoverIntegracao = {
	backgroundColor: "#f5f5f5",
	php: { backgroundColor: "#4c4e73", color: "#fff" },
	mysql: { backgroundColor: "#00758f", color: "#fff" },
	javascript: { backgroundColor: "#ceba33", color: "#fff" },
	jquery: { backgroundColor: "#0769ad", color: "#fff" },
	python: { backgroundColor: "#18354d", color: "#fff" },
	bootstrap: { backgroundColor: "#7952b3", color: "#fff" },
	htmlcss: { backgroundColor: "#e44d26", color: "#fff" },
	git: { backgroundColor: "#141414", color: "#fff" },
};
aplicarEfeitoHover(
	".integracao",
	[
		".php-bg",
		".mysql-bg",
		".javascript-bg",
		".jquery-bg",
		".python-bg",
		".bootstrap-bg",
		".html-css-bg",
		".git-bg",
	],
	estilosHoverIntegracao,
	estiloPadrao
);

const estilosHoverApoio = {
	backgroundColor: "#f5f5f5",
	php: { backgroundColor: "#4c4e73", color: "#fff" },
	mysql: { backgroundColor: "#00758f", color: "#fff" },
	javascript: { backgroundColor: "#ceba33", color: "#fff" },
	jquery: { backgroundColor: "#0769ad", color: "#fff" },
	bootstrap: { backgroundColor: "#7952b3", color: "#fff" },
	htmlcss: { backgroundColor: "#e44d26", color: "#fff" },
	git: { backgroundColor: "#141414", color: "#fff" },
	laravel: { backgroundColor: "#ff2d20", color: "#fff" },
	figma: { backgroundColor: "#f24e1e", color: "#fff" },
	apache: { backgroundColor: "#cc3333", color: "#fff" },
	tailwind: { backgroundColor: "#06b6d4", color: "#fff" },
};
aplicarEfeitoHover(
	".apoio",
	[
		".php-bg",
		".mysql-bg",
		".javascript-bg",
		".jquery-bg",
		".bootstrap-bg",
		".html-css-bg",
		".git-bg",
		".laravel-bg",
		".figma-bg",
		".apache-bg",
		".tailwind-bg",
	],
	estilosHoverApoio,
	estiloPadrao
);

const estilosHoverManutencao = {
	backgroundColor: "#f5f5f5",
	php: { backgroundColor: "#4c4e73", color: "#fff" },
	mysql: { backgroundColor: "#00758f", color: "#fff" },
	javascript: { backgroundColor: "#ceba33", color: "#fff" },
	jquery: { backgroundColor: "#0769ad", color: "#fff" },
	bootstrap: { backgroundColor: "#7952b3", color: "#fff" },
	htmlcss: { backgroundColor: "#e44d26", color: "#fff" },
	git: { backgroundColor: "#141414", color: "#fff" },
	laravel: { backgroundColor: "#ff2d20", color: "#fff" },
	figma: { backgroundColor: "#f24e1e", color: "#fff" },
	apache: { backgroundColor: "#cc3333", color: "#fff" },
	tailwind: { backgroundColor: "#06b6d4", color: "#fff" },
	blade: { backgroundColor: "#f7523f", color: "#fff" },
	typescript: { backgroundColor: "#17395d", color: "#fff" },
	next: { backgroundColor: "#000000", color: "#fff" },
	python: { backgroundColor: "#18354d", color: "#fff" },
	reactnative: { backgroundColor: "#306d7e", color: "#fff" },
	react: { backgroundColor: "#306d7e", color: "#fff" },
	docker: { backgroundColor: "#0db7ed", color: "#fff" },
	linux: { backgroundColor: "#000000", color: "#fff" },
};
aplicarEfeitoHover(
	".manutencao",
	[
		".php-bg",
		".mysql-bg",
		".javascript-bg",
		".jquery-bg",
		".bootstrap-bg",
		".html-css-bg",
		".git-bg",
		".laravel-bg",
		".figma-bg",
		".apache-bg",
		".tailwind-bg",
		".blade-bg",
		".typescript-bg",
		".next-bg",
		".python-bg",
		".react-native-bg",
		".react-bg",
		".docker-bg",
		".linux-bg",
	],
	estilosHoverManutencao,
	estiloPadrao
);

document.addEventListener("DOMContentLoaded", adjustNavDisplay);
window.addEventListener("resize", adjustNavDisplay);
