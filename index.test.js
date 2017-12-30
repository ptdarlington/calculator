const expect = require('chai').expect;

describe('calculator', function() {
  describe('add',function() {
    it('returns the sum of two numbers', function() {
      expect(calculator.add(2, 2)).to.equal(4);
      expect(calculator.add(0, 0)).to.equal(0);
      expect(calculator.add(-1, 3)).to.equal(2);
    });
  });
});

const calculator = {
  add: function(a, b) {
    return a+b;
  }
};
