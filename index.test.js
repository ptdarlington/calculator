const expect = require('chai').expect;

describe('calculator', function() {
  describe('add',function() {
    it('returns the sum of two numbers', function() {
      expect(calculator.add(2, 2)).to.equal(4);
      expect(calculator.add(0, 0)).to.equal(0);
      expect(calculator.add(-1, 3)).to.equal(2);
    });
  });

  describe('subtract',function() {
    it('returns the difference of two numbers', function() {
      //expect(calculator.subtract(5, 2)).to.equal(3);
      //expect(calculator.subtract(0, 0)).to.equal(0);
      expect(calculator.subtract(-1, 3)).to.equal(-4);
    });
  });
});


const calculator = {
  add: function(a, b) {
    return a+b;
  },
  subtract: function(a, b) {
    return a-b;
  }

};
