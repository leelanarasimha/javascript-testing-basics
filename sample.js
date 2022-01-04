const { sum, subtract } = require('./math');

let result = sum(5, 5);
let expected = 10;
expect(result).toBe(expected);

result = subtract(5, 4);
expected = 1;
expect(result).toBe(expected);

function expect(actual) {
  return {
    toBe(result) {
      if (result !== actual) {
        throw new Error(`${result} is not equal to the ${actual}`);
      }
    }
  };
}
