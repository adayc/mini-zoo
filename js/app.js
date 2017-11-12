var select = document.getElementById('effects');

window.onload = function() {
  select.addEventListener('change', selectColor);
}

function selectColor() {

  if (select.value === 'sepia') {
    document.getElementById('grid').classList.add('sepia');
    document.getElementById('grid').classList.remove('grayscale');
    document.getElementById('grid').classList.remove('invert');
  }
  if (select.value === 'grayscale') {
    document.getElementById('grid').classList.add('grayscale');
    document.getElementById('grid').classList.remove('sepia');
    document.getElementById('grid').classList.remove('invert');
  }

  if (select.value === 'invert') {
    document.getElementById('grid').classList.add('invert');
    document.getElementById('grid').classList.remove('sepia');
    document.getElementById('grid').classList.remove('grayscale');
  }

  if (select.value === 'original') {
    document.getElementById('grid').classList.remove('sepia');
    document.getElementById('grid').classList.remove('grayscale');
    document.getElementById('grid').classList.remove('invert');
  }

}
