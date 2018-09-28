const fizzbuzz = require('./fizzbuzz');

test('Calculates first value', () => {
  expect(fizzbuzz(1)).toEqual([1]);
});

test('Calculates first two values', () => {
  expect(fizzbuzz(2)).toEqual([1, 2]);
});

test('Handles first instance of divisible by 3', () => {
  expect(fizzbuzz(3)).toEqual([1, 2, 'Fizz']);
});

test('Handles 1 through 20', () => {
  let resultArray = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz',
'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16, 17, 'Fizz', 19, 'Buzz'];
  expect(fizzbuzz(20)).toEqual(resultArray);
});
