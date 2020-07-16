const valda = require('./../valda');

test('adds 1 + 2 to equal 3', () => {
  expect(valda.sum(1, 2)).toBe(3);
});

test('criteria Valda to equal 3', () => {
  expect(valda.valda([1, 1])).toBe(3);
});
