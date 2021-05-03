// Es una función autoejecutada, que crea un scope privado para evitar
// conflictos con variables del mismo nombre.
// Permite desplegar los elementos acordeón.
(function () {
  // Esta función busca el elemento acordeón en el html.
  // Cuando lo encuentra, sale del bucle y lo devuelve.
  function searchAccordion(element) {
    while ((!element.classList.contains('accordion')) && (!element.classList.contains('main-body'))) {
      element = element.parentNode;
    }
    return element;
  }

  // Esta función abre y cierra el acordeón.
  function openCloseAccordion(event) {
    const accordion = searchAccordion(event.target);
    const section = accordion.classList.item(1);
    const text = document.querySelector(`.text.${section}`);
    if (accordion.classList.contains('open')) {
      accordion.classList.remove('open');
      text.classList.remove('open');
    } else {
      accordion.classList.add('open');
      text.classList.add('open');
    }
  }

  // Esta función, hace el acordeón desplegable por teclado.
  function enterOnAccordion(event) {
    if (event.key === 'Enter') {
      openCloseAccordion(event);
    }
  }

  // Esta constante es un array con todos nuestros elementos html de
  // la clase acordeón.
  const accordions = document.querySelectorAll('.accordion');

  // Recorremos todos los elementos acordeón. 
  // Por cada elemento, borramos los eventos click y keyup para que no
  // Generar memory leaks y los volvemos a crear.
  for (const accordion of accordions) {
    accordion.removeEventListener('click', openCloseAccordion);
    accordion.addEventListener('click', openCloseAccordion);
    accordion.removeEventListener('keyup', enterOnAccordion);
    accordion.addEventListener('keyup', enterOnAccordion);
  }
})()
