const alphabetReplace = require("./alphabetReplace");

/**
 * Given a string, replace every letter with its position in the alphabet.
 *
 * Ignore any non-letter character
 */
describe("Alphabet position replacement", () => {
  xit("first example", () => {
    const inputString = "The sunset sets at twelve o' clock.";
    const outputString =
      "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11";
    expect(alphabetReplace(inputString)).toEqual(outputString);
  });

  xit("second example", () => {
    const inputString = "The narwhal bacons at midnight.";
    const outputString =
      "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20";
    expect(alphabetReplace(inputString)).toEqual(outputString);
  });
});
