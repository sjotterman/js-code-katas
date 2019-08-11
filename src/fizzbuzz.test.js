const fizzbuzz = require('./fizzbuzz');

describe ('Fizzbuzz', function (){

  xit('Calculates first value', () => {
    expect(fizzbuzz(1)).toEqual([1]);
  });

  xit('Calculates first two values', () => {
    expect(fizzbuzz(2)).toEqual([1, 2]);
  });

  xit('Handles first instance of divisible by 3', () => {
    expect(fizzbuzz(3)).toEqual([1, 2, 'Fizz']);
  });

  xit('Handles 1 through 20', () => {
    const resultArray = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz',
  'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16, 17, 'Fizz', 19, 'Buzz'];
    expect(fizzbuzz(20)).toEqual(resultArray);
  });

});;