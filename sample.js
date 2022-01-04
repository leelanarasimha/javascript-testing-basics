const { sum, subtract } = require('./math');

test('Adds two numbers', () => {
  const result = sum(5, 5);
  const expected = 10;
  expect(result).toBe(expected);
});

test('Subtracts two numbers', () => {
  const result = subtract(5, 4);
  const expected = 1;
  expect(result).toBe(expected);
});

function test(title, callback) {
  try {
    callback();
    console.log('Success: ' + title);
  } catch (e) {
    console.log('Error: ' + title);
    console.error(e);
  }
}

function expect(actual) {
  return {
    toBe(result) {
      if (result !== actual) {
        throw new Error(`${result} is not equal to the ${actual}`);
      }
    }
  };
}
