const mathOperations = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(mathOperations.sum(1, 2)).toBe(3);
});

test('Subtract 2 - 1 to equal 1', () => {
    expect(mathOperations.diff(2, 1)).toBe(1);
});

test('Product 2 * 2 to equal 4', () => {
  expect(mathOperations.product(2, 2)).toBe(4);
});