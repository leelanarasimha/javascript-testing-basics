import { add } from './calculator.js';

describe('calculator.js', function () {
  it('should add two numbers', function () {
    expect(add(1, 2)).toBe(3);
  });
});
