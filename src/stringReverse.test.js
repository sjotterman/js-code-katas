const stringReverse = require('./stringReverse');

describe ('Reverse each word in sentence', function (){

  xit('Handles single word', () => {
    expect(stringReverse('Hello')).toEqual('olleH');
  });

  xit('Handles multiple words', () => {
    expect(stringReverse('Hello world')).toEqual('olleH dlrow');
  });

  xit('Ignores punctuation', () => {
    expect(stringReverse('Hello world.')).toEqual('olleH dlrow.');
  });


});;
