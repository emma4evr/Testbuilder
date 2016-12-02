// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  var stringToArray = cardNumber.split('').map(Number);
    if(stringToArray[0] === 4) {
      return 'Visa';
    } else if(stringToArray[0] === 5 && stringToArray[1] !== 0) {
        return 'MasterCard';
      } else if(stringToArray[0] === 5 && stringToArray [1] === 0) {
      	  return 'Maestro';
        } else if(stringToArray[0] === 6 && stringToArray[1] !== 3) {
      	    return 'Discover';
      	  } else if(stringToArray[0] === 6 && stringToArray[1] === 3) {
      	  	  return 'Maestro';
      	    } else if(stringToArray.length === 14 && stringToArray[1] === 8 || stringToArray[1] === 9) {
                return 'Diner\'s Club';
              } else if(stringToArray.length === 15 && stringToArray[1] === 4 || stringToArray[1] === 7) {
                  return 'American Express';
                } 
};    
// Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

/* STEP THREE:

Well done! To ease the pain of manual testing, you can write automated tests! 
In the next step, your browser will turn into an automated test suite powered by Mocha and Chai.

Automated tests are imperative to your efficiency as a developer. 
You can write a mocha test once and run it an unlimited amount of times, just by refreshing the page.

Each time the test suite is run (by refreshing the page, remember?), 
the report clearly marks failed tests, allowing you to identify errors quickly.

38345678901234 (Diner's Club)
39345678901234 (Diner's Club)
343456789012345 (American Express)
373456789012345 (American Express)
4123456789012 (Visa)
4123456789012345 (Visa)
4123456789012345678 (Visa)
5112345678901234 (MasterCard)
5212345678901234 (MasterCard)
5312345678901234 (MasterCard)
5412345678901234 (MasterCard)
5512345678901234 (MasterCard)
6011123456789123 (Discover)
6011987654321987456 (Discover)
501812345678 (Maestro)
502012345678 (Maestro)
503812345678 (Maestro)
630412345678 (Maestro)
5038123456781 (Maestro)
50201234567812 (Maestro)
501812345678123 (Maestro)
6304123456781234 (Maestro)
50381234567812345 (Maestro)
502012345678123456 (Maestro)
5018123456781234567 (Maestro)
*/













