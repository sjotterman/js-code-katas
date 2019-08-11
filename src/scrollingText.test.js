const scrollingText = require('./scrollingText');

/**
 * Return all possible rotations of the given string,
 * in uppercase
 */
describe ('Scrolling Text', function (){

  xit('Short example', () => {
    const inputArr = "abc";
    const output = ["ABC","BCA","CAB"];
    expect(scrollingText(inputArr)).toEqual(output);
  });

  xit('Short example', () => {
    const inputArr = "codewars";
    const output = [ "CODEWARS", "ODEWARSC", "DEWARSCO", "EWARSCOD", "WARSCODE",
                  "ARSCODEW" ,"RSCODEWA", "SCODEWAR" ];
    expect(scrollingText(inputArr)).toEqual(output);
  });

});;
