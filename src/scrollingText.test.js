const scrollingText = require('./scrollingText');

/**
 * Return all possible rotations of the given string,
 * in uppercase
 */
describe ('Scrolling Text', function (){

  xit('Short example', () => {
    let inputArr = "abc";
    let output = ["ABC","BCA","CAB"];
    expect(scrollingText(inputArr)).toEqual(output);
  });

  xit('Short example', () => {
    let inputArr = "codewars";
    let output = [ "CODEWARS", "ODEWARSC", "DEWARSCO", "EWARSCOD", "WARSCODE",
                  "ARSCODEW" ,"RSCODEWA", "SCODEWAR" ];
    expect(scrollingText(inputArr)).toEqual(output);
  });

});;
