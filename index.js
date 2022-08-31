//Check to see whether the input from the user is a valid hex color

const isValidHex = (hex) => {
  if (!hex) return false;

  const strippedHex = hex.replace('#', '');
  return strippedHex.length === 3 || strippedHex.length === 6;
}

console.log(isValidHex("#000000")) //true
console.log(isValidHex("#0000000")) //false
console.log(isValidHex("#ffffff")) //true
console.log(isValidHex("#fff")) //true