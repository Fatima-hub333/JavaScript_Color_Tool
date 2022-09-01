//Get a reference to hexInput and inputColor DOM elements
const hexInput = document.getElementById('hexInput');
const inputColor = document.getElementById('inputColor');
const sliderText = document.getElementById("sliderText");
const slider = document.getElementById("slider");
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

// Second Challenge
//Create a function to convert Hex to RGB
const convertHexToRGB = (hex) => {
  if (!isValidHex(hex)) return null;
  let strippedHex = hex.replace('#', '');
  //this should work with 3 or 6 character hex values
  if (strippedHex.length === 3) {
    strippedHex = strippedHex[0] + strippedHex[0]
      + strippedHex[1] + strippedHex[1]
      + strippedHex[2] + strippedHex[2];
  }
  //Hint - use parseInt("", 16) to convert a hex value to a decimal value
  //should return an object with 3 properties - r,g, and b
  const r = parseInt(strippedHex.substring(0, 2), 16);
  const g = parseInt(strippedHex.substring(2, 4), 16);
  const b = parseInt(strippedHex.substring(4, 6), 16);

  return { r, g, b };
}
//Convert RGB To HEXA Solution
const convertRGBToHex = (r, g, b) => {
  const firstPair = ("0" + r.toString(16)).slice(-2);
  const secondPair = ("0" + g.toString(16)).slice(-2);
  const thirdPair = ("0" + b.toString(16)).slice(-2);

  const hex = "#" + firstPair + secondPair + thirdPair;
  return hex;
}
console.log(convertRGBToHex(0, 0, 255));

//get a reference to the slider and sliderText DOM elements
//create an input event listener for slider element
//display the value of the slider

slider.addEventListener('input', () => {
  sliderText.textContent = `${slider.value}%`;
})