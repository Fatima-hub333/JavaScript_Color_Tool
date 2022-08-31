//Get a reference to hexInput and inputColor DOM elements
const hexInput = document.getElementById('hexInput');
const inputColor = document.getElementById('inputColor');
//Create a keyup event handler for hexInput
hexInput.addEventListener('keyup', () => {
  const hex = hexInput.value;
  //Check if hex color is valid
  if(!isValidHex(hex)) return;
  
//If hex color is valid, update the background color of inputColor
  const strippedHex = hex.replace('#', '');
  inputColor.style.backgroundColor = "#" + strippedHex;
})

const isValidHex = (hex) => {
  if(!hex) return false;
  
  const strippedHex = hex.replace('#', '');
  return strippedHex.length === 3 || strippedHex.length === 6;
}

