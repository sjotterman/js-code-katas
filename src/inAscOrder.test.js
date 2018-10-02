const inAscOrder = require('./inAscOrder');

describe ('Check if array is in ascending order', function (){

  xit('In ascending order', () => {
    expect(inAscOrder([1, 2, 4, 7, 19])).toEqual(true);
    expect(inAscOrder([1, 2, 3, 4, 5])).toEqual(true);
  });

  xit('In non-sorted order', () => {
    expect(inAscOrder([1, 6, 10, 18, 2, 4, 20])).toEqual(false);
  });

  xit('In descending order', () => {
    expect(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual(false);
  });

});;