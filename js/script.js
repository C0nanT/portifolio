window.addEventListener('scroll', function() {
    const projetosSection = document.getElementById('projetos');
    const navButtons = document.querySelectorAll('.nav-button');
    const projetosSectionTop = projetosSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
  
    if (projetosSectionTop <= windowHeight / 2) {
      navButtons.forEach(button => {
        button.classList.remove('nav-button-light');
        button.classList.add('nav-button-dark');
      });
    } else {
      navButtons.forEach(button => {
        button.classList.remove('nav-button-dark');
        button.classList.add('nav-button-light');
      });
    }
  });