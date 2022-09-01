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



//Create the alterColor function which accepts hex value and percentage
const alterColor = (hex, percentage) => {
  //convert the hex value to rgb
  const { r, g, b } = convertHexToRGB(hex);
  //increase each r,g,b value by appropriate amount (percentage of 255)
  const amount = Math.floor((percentage / 100) * 255);
  //use the new r,g,b values to convert to a hex value
  const newR = increaseWithin0To255(r,amount);
  const newG = increaseWithin0To255(g, amount);
  const newB = increaseWithin0To255(b, amount);
  console.log(newR, newG, newB);
  //return the hex value
  return convertRGBToHex(newR, newG, newB);
}

const increaseWithin0To255 = (hex, amount) => {
  // const newHex = hex + amount;
  // if (newHex > 255) return 255;
  // if (newHex < 0) return 0;
  // return newHex;
  return Math.min(255, Math.max(0, hex + amount));
}

alterColor("fff", 10);
//get a reference to the slider and sliderText DOM elements
//create an input event listener for slider element
//display the value of the slider

slider.addEventListener('input', () => {
  sliderText.textContent = `${slider.value}%`;
})