const findEvenIndex = require('./findEvenIndex');

/**
 * Find the index of an array N such that the sum of the integers
 * to the left of N is equal to the sum of the integers to the right 
 * See https://www.codewars.com/kata/equal-sides-of-an-array/train/javascript
 */
describe ('Equal Sides of an array', function (){

  it('Finds even index', () => {
   expect(findEvenIndex([1,2,3,4,3,2,1])).toEqual(3);
   expect(findEvenIndex([1,100,50,-51,1,1])).toEqual(1);
   expect(findEvenIndex([1,2,3,4,5,6])).toEqual(-1);
   expect(findEvenIndex([20,10,30,10,10,15,35])).toEqual(3);
  });


});;
