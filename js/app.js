// Declaración de las variables  
var select = document.getElementById('effects');

// Declaramos las funciones que se emplearan al cargar la página
window.onload = function() {
  select.addEventListener('change', selectColor);
};

// Declaramos la funcion selectColor que nos dará el efecto de acuerdo la elección de la lista
function selectColor() {
// Si seleccionamos sepia, se añadirá la clase sepia y se removeran las demás
  if (select.value === 'sepia') {
    document.getElementById('grid').classList.add('sepia');
    document.getElementById('grid').classList.remove('grayscale');
    document.getElementById('grid').classList.remove('invert');
  }
  // Si seleccionamos grayscale, se añadirá la clase sepia y se removeran las demás
  if (select.value === 'grayscale') {
    document.getElementById('grid').classList.add('grayscale');
    document.getElementById('grid').classList.remove('sepia');
    document.getElementById('grid').classList.remove('invert');
  }
  // Si seleccionamos invert, se añadirá la clase sepia y se removeran las demás
  if (select.value === 'invert') {
    document.getElementById('grid').classList.add('invert');
    document.getElementById('grid').classList.remove('sepia');
    document.getElementById('grid').classList.remove('grayscale');
  }
  // Si seleccionamos original, se añadirá la clase sepia y se removeran las demás
  if (select.value === 'original') {
    document.getElementById('grid').classList.remove('sepia');
    document.getElementById('grid').classList.remove('grayscale');
    document.getElementById('grid').classList.remove('invert');
  }
}
