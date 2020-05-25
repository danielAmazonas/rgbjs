let red = null;
let green = null;
let blue = null;
let color = null;
let redValue = null;
let greenValue = null;
let blueValue = null;
let hex = null;

window.addEventListener('load', () => {
  red = document.querySelector('#red');
  green = document.querySelector('#green');
  blue = document.querySelector('#blue');
  color = document.querySelector('#color');
  redValue = document.querySelector('#redValue');
  greenValue = document.querySelector('#greenValue');
  blueValue = document.querySelector('#blueValue');
  hex = document.querySelector('#hex');
  red.addEventListener('input', () => {
    redValue.value = document.querySelector('#red').value;
    getRGB();
  });
  green.addEventListener('input', () => {
    greenValue.value = document.querySelector('#green').value;
    getRGB();
  });
  blue.addEventListener('input', () => {
    blueValue.value = document.querySelector('#blue').value;
    getRGB();
  });
});

function getRGB() {
  red = document.querySelector('#red').value;
  green = document.querySelector('#green').value;
  blue = document.querySelector('#blue').value;
  color.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  hex.textContent = 'HEX: ' + rgbToHex(red, green, blue);
}

function rgbToHex(r, g, b) {
  return '#' + ((1 << 24) + (+r << 16) + (+g << 8) + +b).toString(16).slice(1);
}
