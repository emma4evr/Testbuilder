//var chai = require('chai');

/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 8, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

//describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 
/*
  it('Throws an error so it fails', function() {
    throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });

})
var prefixGenerator = function(rangeA, rangeB) {

}

for (var prefix = rangeA; prefix <= rangeB; prefix++) {
  (function(prefix) {
    it('has a prefix of ' + prefix + ' and a length of 16');
    it('has a prefix of ' + prefix + ' and a length of 19');
  })(prefix)
}
*/

var prefixCounter = (function() {
  var should = chai.should();
  
  return {
    cardWithRange: function(cardName, val1, val2, cardLength) {
      var cardNumber = '12345678';
      var prefixContainer = val1;
      var prefixToString = prefixContainer.toString();

      if(prefixToString.length + cardNumber.length < cardLength) {
        for(var i = prefixToString.length + cardNumber.length; i < cardLength; i++) {
          cardNumber = cardNumber + Math.floor(Math.random() * 10);
        }
      } for(var prefix = val1; prefix <= val2; prefix++) {
          (function(prefix) {
            it('has a prefix of ' + prefix + ' and a length of ' + parseInt(prefixToString.length + cardNumber.length), function() {
              detectNetwork(prefix + cardNumber).should.equal(cardName);
            });
          })(prefix)
        }
    },
    staticPrefix: function(cardName, prefix, cardLength) {
      var cardNumber = '12345678';
      var prefixContainer = prefix;
      var prefixToString = prefixContainer.toString();

      if(prefixToString.length + cardNumber.length < cardLength) {
        for(var i = prefixToString.length + cardNumber.length; i < cardLength; i++) {
          cardNumber = cardNumber + Math.floor(Math.random() * 10);
        }
      } (function(prefix) {
          it('has a prefix of ' + prefix + ' and a length of ' + parseInt(prefixToString.length + cardNumber.length), function() {
            detectNetwork(prefix + cardNumber).should.equal(cardName);
          });
        })(prefix)
    },
    staticPrefixWithLengthRange: function(cardName, prefix, val1, val2) {
      var cardNumber = '12345678';
      var prefixContainer = prefix;
      var prefixToString = prefixContainer.toString();

      for(var cardLength = val1; cardLength <= val2; cardLength++) {
        if(cardNumber.length + prefixToString.length < cardLength) {
          cardNumber = cardNumber + Math.floor(Math.random() * 10);
        } (function(prefix) {
            it('has a prefix of ' + prefix + ' and a length of ' + parseInt(prefixToString.length + cardNumber.length), function() {
              detectNetwork(prefix + cardNumber).should.equal(cardName);
            });
          })(prefix)
      }
    },
    cardWithPrefixRangeAndLengthRange: function(cardName, preRange1, preRange2, lenRange1, lenRange2) {
      var cardNumber = '12345678';
      var prefixContainer = preRange1;
      var prefixToString = prefixContainer.toString();

      for(var cardLength = lenRange1; cardLength <= lenRange2; cardLength++) {
        if(cardNumber.length + prefixToString.length < cardLength) {
          cardNumber = cardNumber + Math.floor(Math.random() * 10);
        } 
      } for(var prefix = preRange1; prefix <= preRange2; prefix++) {
          (function(prefix) {
            it('has a prefix of ' + prefix + ' and a length of ' + parseInt(prefixToString.length + cardNumber.length), function() {
              detectNetwork(prefix + cardNumber).should.equal(cardName);
            });
          })(prefix)
        }
    }
  }    
})();

// -------- Diner's Club Tests --------

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...
  prefixCounter.cardWithRange('Diner\'s Club', 38, 39, 14);
});

// -------- American Express Tests --------

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  prefixCounter.staticPrefix('American Express', 34, 15);

  prefixCounter.staticPrefix('American Express', 37, 15);
});

// -------- Visa Tests --------


describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  prefixCounter.cardWithRange('Visa', 40, 49, 13);

  prefixCounter.cardWithRange('Visa', 40, 49, 16);

  prefixCounter.cardWithRange('Visa', 40, 49, 19);
});

// -------- MasterCard Tests --------

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
    prefixCounter.cardWithRange('MasterCard', 51, 55, 16);

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both.  
});

// -------- Discover Tests --------
/*
for (var prefix = 644; prefix <= 649; prefix++) {
  (function(prefix) {
    it('has a prefix of ' + prefix + ' and a length of 16');
    it('has a prefix of ' + prefix + ' and a length of 19');
  })(prefix)
}
*/

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  prefixCounter.cardWithRange('Discover', 644, 649, 16);

  prefixCounter.cardWithRange('Discover', 644, 649, 19);

  prefixCounter.staticPrefix('Discover', 6011, 16);

  prefixCounter.staticPrefix('Discover', 6011, 19);

  prefixCounter.staticPrefix('Discover', 65, 16);

  prefixCounter.staticPrefix('Discover', 65, 19);
});
/*
  var expect = chai.expect;

  it('has a prefix of 6 and a length of 16', function() {
    expect(detectNetwork('6011123456789123')).to.equal('Discover');
  });

  it('has a prefix of 6 and a length of 19', function() {
    expect(detectNetwork('6011987654321987456')).to.equal('Discover');
  });
});
*/
// -------- Maestro Tests --------

describe('Maestro', function() {
  prefixCounter.staticPrefixWithLengthRange('Maestro', 5018, 12, 19);

  prefixCounter.staticPrefixWithLengthRange('Maestro', 5020, 12, 19);

  prefixCounter.staticPrefixWithLengthRange('Maestro', 5038, 12, 19);

  prefixCounter.staticPrefixWithLengthRange('Maestro', 6304, 12, 19);
});

// -------- China UnionPay Tests --------
/*
describe('China UnionPay', function() {
  prefixCounter.cardWithPrefixRangeAndLengthRange('China UnionPay', 622126, 622925, 16, 19);
});
*/
// -------- Switch Tests --------

describe('should support Switch')








