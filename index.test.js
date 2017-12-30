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
      expect(calculator.subtract(5, 2)).to.equal(3);
      expect(calculator.subtract(0, 0)).to.equal(0);
      expect(calculator.subtract(-1, 3)).to.equal(-4);
    });
  });

  describe('multiply',function() {
    it('returns the product of two numbers', function() {
      expect(calculator.multiply(10, 2)).to.equal(20);
      expect(calculator.multiply(0, 1)).to.equal(0);
      expect(calculator.multiply(2, 3)).to.equal(6);
    });
  });

  describe('divide',function() {
    it('returns the quotient of two numbers', function() {
      expect(calculator.divide(10, 2)).to.equal(5);
      expect(calculator.divide(30, 1)).to.equal(30);
      expect(calculator.divide(50, 5)).to.equal(10);
    });
  });

});


const calculator = {
  add: function(a, b) {
    return a+b;
  },
  subtract: function(a, b) {
    return a-b;
  },
  multiply: function(a, b) {
    return a*b;
  },
  divide: function(a, b) {
    return a/b;
  }
};
