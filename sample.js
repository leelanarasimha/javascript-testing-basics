const { sum, subtract, sumAsync, subtractAsync } = require('./math');

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

test('Adds async two numbers', async () => {
  const result = await sumAsync(5, 4);
  const expected = 9;
  expect(result).toBe(expected);
});
test('Subtracts async two numbers', async () => {
  const result = await subtractAsync(5, 4);
  const expected = 1;
  expect(result).toBe(expected);
});

async function test(title, callback) {
  try {
    await callback();
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
