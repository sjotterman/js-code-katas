const longestAndShortest = require('./longestAndShortest');

/**
 * Intended to pratice rest parameters
 */
describe ('Find longest and shortest word', function (){

  xit('Handles single word', () => {
    const expectedResponse = {
      longest: "Hello",
      shortest: "Hello"
    }
    expect(longestAndShortest('Hello')).toMatchObject(expectedResponse);
  });

  xit('Handles two words', () => {
    const expectedResponse = {
      longest: "Hello",
      shortest: "Hi"
    }
    expect(longestAndShortest('Hello', 'Hi')).toMatchObject(expectedResponse);
  });

  xit('Handles multiple words', () => {
    const expectedResponse = {
      longest: "Greetings",
      shortest: "Hi"
    }
    expect(longestAndShortest('Hello', 'Hi', 'Hola', 'Greetings')).toMatchObject(expectedResponse);
  });

  xit('First appearing word is tiebreaker', () => {
    const expectedResponse = {
      longest: "First",
      shortest: "Hi"
    }
    expect(longestAndShortest('First', 'World', 'Hi')).toMatchObject(expectedResponse);
  });

  xit('Return null if no input', () => {
    expect(longestAndShortest()).toBeNull();
  });

});;
