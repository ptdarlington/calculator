const expect = require('chai').expect;

describe('calculator', () => {
  describe('add', () => {
    it('returns the sum of two numbers', () => {
      expect(calculator.add(2, 2)).to.equal(4);
      expect(calculator.add(0, 0)).to.equal(0);
      expect(calculator.add(-1, 3)).to.equal(2);
    });
  });

  describe('subtract', () => {
    it('returns the difference of two numbers', () => {
      expect(calculator.subtract(5, 2)).to.equal(3);
      expect(calculator.subtract(0, 0)).to.equal(0);
      expect(calculator.subtract(-1, 3)).to.equal(-4);
    });
  });

  describe('multiply', () => {
    it('returns the product of two numbers', () => {
      expect(calculator.multiply(10, 2)).to.equal(20);
      expect(calculator.multiply(0, 1)).to.equal(0);
      expect(calculator.multiply(2, 3)).to.equal(6);
    });
  });

  describe('divide', () => {
    it('returns the quotient of two numbers', () => {
      expect(calculator.divide(10, 2)).to.equal(5);
      expect(calculator.divide(30, 1)).to.equal(30);
      expect(calculator.divide(50, 5)).to.equal(10);
    });
  });
});


const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};
