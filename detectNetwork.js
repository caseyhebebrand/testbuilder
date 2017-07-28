// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var twoCharPrefix = cardNumber.slice(0, 2);

  if (cardNumber.length === 15 && (twoCharPrefix === '34' || twoCharPrefix === '37')) {
  	return 'American Express';
  }

  if (cardNumber.length === 14 && (twoCharPrefix === '38' || twoCharPrefix === '39')) {
  	return 'Diner\'s Club';
  }

  var visaLengths = [13, 16, 19];
  if (cardNumber[0] === '4' && visaLengths.includes(cardNumber.length)) {
  	return 'Visa';
  }

  var masterCardPrefixes = ['51', '52', '53', '54', '55'];
  if (cardNumber.length === 16 && masterCardPrefixes.includes(twoCharPrefix)) {
  	return 'MasterCard';
  }

  var maestroPrefixes = ['5018', '5020', '5038', '6304'];
  var maestroStart = cardNumber.slice(0, 4);
  var maestroLengths = [12, 13, 14, 15, 16, 17, 18, 19];
  if (maestroPrefixes.includes(maestroStart) && maestroLengths.includes(cardNumber.length)) {
  	return 'Maestro';
  }

  var threeCharPrefix = cardNumber.slice(0, 3);
  var fourCharPrefix = cardNumber.slice(0, 4);
  var discoverLengths = [16, 19];
  var discoverPrefixes = ['65', '644', '645', '646', '647', '648', '649', '6011'];
  if (discoverLengths.includes(cardNumber.length) && (discoverPrefixes.includes(threeCharPrefix)|| discoverPrefixes.includes(fourCharPrefix) || discoverPrefixes.includes(twoCharPrefix))) {
  	return 'Discover';
  }

};


