const deleteNth = require('./deleteNth');

describe ('Delete occurences of an element if it occurs more than n times', function (){

  xit('Handles first example', () => {
    const inputArr = [20, 37, 20, 21];
    const outputArr = [20, 37, 21];
    expect(deleteNth(inputArr, 1)).toEqual(outputArr);
  });

  xit('Handles second example', () => {
    const inputArr = [1,1,3,3,7,2,2,2,2];
    const outputArr = [1, 1, 3, 3, 7, 2, 2, 2];
    expect(deleteNth(inputArr, 3)).toEqual(outputArr);
  });

});;