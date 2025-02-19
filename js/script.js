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

function showTecChatbot() {
    const elements = {
        empresa: document.querySelector('.empresa'),
        chatbot: document.querySelector('.chatbot'),
        php: document.querySelector('.php-bg'),
        typescript: document.querySelector('.typescript-bg'),
        mysql: document.querySelector('.mysql-bg'),
        laravel: document.querySelector('.laravel-bg'),
        react: document.querySelector('.react-bg'),
        next: document.querySelector('.next-bg'),
        python: document.querySelector('.python-bg'),
        git: document.querySelector('.git-bg'),
        allBgElements: document.querySelectorAll('.empresa-sistemapet [class$="-bg"]')
    };

    const hoverStyles = {
        backgroundColor: '#f5f5f5',
        php: { backgroundColor: '#4c4e73', color: '#fff' },
        typescript: { backgroundColor: '#17395d', color: '#fff' },
        mysql: { backgroundColor: '#00758f', color: '#fff' },
        laravel: { backgroundColor: '#ff2d20', color: '#fff' },
        react: { backgroundColor: '#306d7e', color: '#fff' },
        next: { backgroundColor: '#000000', color: '#fff' },
        python: { backgroundColor: '#18354d', color: '#fff' },
        git: { backgroundColor: '#141414', color: '#fff' }
    };

    const defaultStyles = {
        backgroundColor: '#fff',
        color: '#000'
    };

    elements.allBgElements.forEach(el => {
        el.dataset.originalDisplay = window.getComputedStyle(el).display;
    });

    function applyStyles(element, styles) {
        Object.assign(element.style, styles);
    }

    elements.chatbot.addEventListener('mouseover', () => {
        applyStyles(elements.empresa, { backgroundColor: hoverStyles.backgroundColor });
        
      
        
        Object.keys(hoverStyles).forEach(key => {
            if (key !== 'backgroundColor' && key !== 'color' && elements[key]) {
                applyStyles(elements[key], hoverStyles[key]);
                elements[key].style.display = elements[key].dataset.originalDisplay;
            }
        });
    });

    elements.chatbot.addEventListener('mouseout', () => {
        applyStyles(elements.empresa, { backgroundColor: defaultStyles.backgroundColor });
        
        elements.allBgElements.forEach(el => {
            applyStyles(el, defaultStyles);
            el.style.display = el.dataset.originalDisplay;
        });
    });
}

function showTecAppMobile() {
    const elements = {
        empresa: document.querySelector('.empresa'),
        criadores: document.querySelector('.sistemapet-criadores'),
        php: document.querySelector('.php-bg'),
        mysql: document.querySelector('.mysql-bg'),
        laravel: document.querySelector('.laravel-bg'),
        reactnative: document.querySelector('.react-native-bg'),
        git: document.querySelector('.git-bg'),
		typescript: document.querySelector('.typescript-bg'),
		figma: document.querySelector('.figma-bg'),
		apache: document.querySelector('.apache-bg'),

        allBgElements: document.querySelectorAll('.empresa-sistemapet [class$="-bg"]')
    };

    const hoverStyles = {
        backgroundColor: '#f5f5f5',
        php: { backgroundColor: '#4c4e73', color: '#fff' },
        mysql: { backgroundColor: '#00758f', color: '#fff' },
        laravel: { backgroundColor: '#ff2d20', color: '#fff' },
        reactnative: { backgroundColor: '#306d7e', color: '#fff' },
        git: { backgroundColor: '#141414', color: '#fff' },
        typescript: { backgroundColor: '#17395d', color: '#fff' },
		figma: { backgroundColor: '#f24e1e', color: '#fff' },
		apache: { backgroundColor: '#cc3333', color: '#fff' }
    };

    const defaultStyles = {
        backgroundColor: '#fff',
        color: '#000'
    };

    elements.allBgElements.forEach(el => {
        el.dataset.originalDisplay = window.getComputedStyle(el).display;
    });

    function applyStyles(element, styles) {
        Object.assign(element.style, styles);
    }

    elements.criadores.addEventListener('mouseover', () => {
        applyStyles(elements.empresa, { backgroundColor: hoverStyles.backgroundColor });
        
      
        
        Object.keys(hoverStyles).forEach(key => {
            if (key !== 'backgroundColor' && key !== 'color' && elements[key]) {
                applyStyles(elements[key], hoverStyles[key]);
                elements[key].style.display = elements[key].dataset.originalDisplay;
            }
        });
    });

    elements.criadores.addEventListener('mouseout', () => {
        applyStyles(elements.empresa, { backgroundColor: defaultStyles.backgroundColor });
        
        elements.allBgElements.forEach(el => {
            applyStyles(el, defaultStyles);
            el.style.display = el.dataset.originalDisplay;
        });
    });
}

showTecChatbot();
showTecAppMobile();

document.addEventListener("DOMContentLoaded", adjustNavDisplay);
window.addEventListener("resize", adjustNavDisplay);
