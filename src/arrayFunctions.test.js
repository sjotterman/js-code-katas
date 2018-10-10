const arrayFunctions = require('./arrayFunctions');

/**
 * This could be solved with loops, but they are intended for 
 * practicing array functions
 */
describe ('Array functions', function (){

  xit('Simple array map', () => {
    let inputArr = [1, 2, 3];
    let outputArr = [2, 4, 6];
    expect(arrayFunctions.double(inputArr)).toEqual(outputArr);
  });

  xit('Simple array filter', () => {
    let inputArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let outputArr = [3, 6, 9];
    expect(arrayFunctions.findMultiplesOfThree(inputArr)).toEqual(outputArr);
  });

  xit('Simple array sum', () => {
    expect(arrayFunctions.findSum([1, 2, 3])).toEqual(6);
    expect(arrayFunctions.findSum([2, 4, 6])).toEqual(12);
  });


});;
