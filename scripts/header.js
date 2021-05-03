// Esta función nos permite abrir y cerrar el menú en la versión móvil.
(function () {
  const menuButton = document.querySelector('.material-icons.menu-icon');
  const menuOptions = document.querySelector('.menu-options');

  // Con esta función, se cierra el menú si se pincha en cualquier lado de la pantalla
  // a excepción del menú y este está abierto.
  function closeMenu(event) {
    if (
      menuOptions.classList.contains('open')
      && !event.target.classList.contains('menu-icon')
    ) {
      menuOptions.classList.remove('open');
    }
  }

  // Despliega el menú si está cerrado.
  // Si está abierto lo cierra.
  function clickOnMenu() {
    if (menuOptions.classList.contains('open')) {
      menuOptions.classList.remove('open');
    } else {
      menuOptions.classList.add('open');
    }
  }

  // Esta función, hace el menú desplegable por teclado.
  function enterOnMenu(event) {
    if (event.key === 'Enter') {
      clickOnMenu();
    }
  }

  // Recorremos todos los elementos acordeón. 
  // Por cada elemento, borramos los eventos click y keyup para que no
  // Generar memory leaks y los volvemos a crear.  
  document.removeEventListener('click', closeMenu);
  document.addEventListener('click', closeMenu);
  menuButton.removeEventListener('click', clickOnMenu);
  menuButton.addEventListener('click', clickOnMenu);
  menuButton.removeEventListener('keyup', enterOnMenu);
  menuButton.addEventListener('keyup', enterOnMenu);
})()

// Con este script de JS desencadenamos el despliegue y el cierre del menú en versión móvil.