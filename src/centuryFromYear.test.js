const centuryFromYear = require('./centuryFromYear');

describe ('Calculate the century from year', function (){

  xit('Handles years in the middle of centuries', () => {
    expect(centuryFromYear(1705)).toEqual(18);
    expect(centuryFromYear(2018)).toEqual(21);
  });

  xit('Handles years ending in 00', () => {
    expect(centuryFromYear(900)).toEqual(9);
    expect(centuryFromYear(1900)).toEqual(19);
    expect(centuryFromYear(2000)).toEqual(20);
  });

  xit('Handles years ending in 01', () => {
    expect(centuryFromYear(1601)).toEqual(17);
    expect(centuryFromYear(1401)).toEqual(15);
  });

  xit('Handles three digit years', () => {
    expect(centuryFromYear(707)).toEqual(8);
    expect(centuryFromYear(801)).toEqual(9);
  });

  xit('Handles one digit years', () => {
    expect(centuryFromYear(1)).toEqual(1);
    expect(centuryFromYear(9)).toEqual(1);
  });

});;
