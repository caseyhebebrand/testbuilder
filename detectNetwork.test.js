/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
/*describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

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
});*/
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') !== 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') !== 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var expect = chai.expect;
  
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  });
 
});
 

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var expect = chai.expect;
  let discoverPrefixes = ['6011', '644', '645', '646', '647', '648', '649', '65'];
  let discoverLengths = [16, 19];
  
  var checkCardNumber = function(length, prefix) {
    let cardNum = prefix;
    (function(length) {
      for (var char = length - prefix.length; char > 0; char --) {
        cardNum += (char % 10).toString();
      }
      it(`has a prefix of ${prefix} and a length of ${length} (card number is ${cardNum})`, function() {
          expect(detectNetwork(cardNum)).to.equal('Discover')
        });
    })(length);
  };

  discoverPrefixes.forEach(function(prefix) {
    discoverLengths.forEach(function(length) {
      checkCardNumber(length, prefix);
    });
  });
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  let expect = chai.expect;
  let maestroPrefixes = ['5018', '5020', '5038', '6304'];

  maestroPrefixes.forEach(function(prefix) {
    for (let length = 12; length <= 19; length ++) {
      let cardNum = prefix;
      (function(length) {
        for (var char = length - 4; char > 0; char --) {
          cardNum += (char % 10).toString();
        }

        it(`has a prefix of ${prefix} and a length of ${length} (card number is ${cardNum})`, function() {
          expect(detectNetwork(cardNum)).to.equal('Maestro')
        });
    
      })(length);
    }
  });
});

describe('China UnionPay', function() {
  let expect = chai.expect;
  let chinaLengths = [16, 17, 18, 19];
  let lowPrefix1 = 622126;
  let highPrefix1 = 622925;
  let lowPrefix2 = 624;
  let highPrefix2 = 626;
  let lowPrefix3 = 6282;
  let highPrefix3 = 6288;

  var checkCardNumberWithRange = function(lowPrefix, highPrefix, len) {
    for (let prefix = lowPrefix; prefix <= highPrefix; prefix ++) {
      (function(prefix) {
        var cardNum = prefix.toString();
        var cardLength = cardNum.length;
        for (var strLength = len - cardLength; strLength > 0; strLength --) {
          cardNum += (strLength % 10).toString();
        }

        it(`has a prefix of ${prefix} and a length of ${len} (card number is ${cardNum})`, function() {
          expect(detectNetwork(cardNum)).to.equal('China UnionPay')
        });

      })(prefix);
    }
  }

  chinaLengths.forEach(function(len) {
    checkCardNumberWithRange(lowPrefix1, highPrefix1, len);
    checkCardNumberWithRange(lowPrefix2, highPrefix2, len);
    checkCardNumberWithRange(lowPrefix3, highPrefix3, len);
  });
});

//describe('should support Switch')
describe('Switch', function() {
  let expect = chai.expect;
  let switchPrefixes = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];
  let switchLengths = [16, 18, 19];
  
  var checkCardNumber = function(length, prefix) {
    let cardNum = prefix;
    (function(length) {
      for (var char = length - prefix.length; char > 0; char --) {
        cardNum += (char % 10).toString();
      }

      it(`has a prefix of ${prefix} and a length of ${length} (card number is ${cardNum})`, function() {
          expect(detectNetwork(cardNum)).to.equal('Switch')
        });
    })(length);
  };

  switchPrefixes.forEach(function(prefix) {
    switchLengths.forEach(function(length) {
      checkCardNumber(length, prefix);
    });
  });
});
