const phoneNumberIsValid = require('./phoneNumberIsValid');

/**
 * Practice regular expressions
 */
describe ('Check validity of American phone numbers', function (){

  xit('Counts less than 10 digits as invalid', () => {
    expect(phoneNumberIsValid('1')).toEqual(false);
    expect(phoneNumberIsValid('555')).toEqual(false);
    expect(phoneNumberIsValid('5551234')).toEqual(false);
    expect(phoneNumberIsValid('216555555')).toEqual(false);
  });

  xit('Counts ten digits, no symbols as valid', () => {
    expect(phoneNumberIsValid('3305551234')).toEqual(true);
  });

  xit('Counts leading 1, no symbols as valid', () => {
    expect(phoneNumberIsValid('3305551234')).toEqual(true);
  });

  xit('Handles parentheses and hyphens', () => {
    expect(phoneNumberIsValid('(330) 5551234')).toEqual(true);
    expect(phoneNumberIsValid('(330) 555 1234')).toEqual(true);
    expect(phoneNumberIsValid('(330)5551234')).toEqual(true);
    expect(phoneNumberIsValid('(330) 555-1234')).toEqual(true);
  });

  xit('Rejects symbols in the wrong place', () => {
    expect(phoneNumberIsValid('(33)0 5551234')).toEqual(false);
    expect(phoneNumberIsValid('(330) 55-51234')).toEqual(false);
    expect(phoneNumberIsValid('(330) 55512-34')).toEqual(false);
  });

  xit('Rejects invalid symbols', () => {
    expect(phoneNumberIsValid('[330] 5551234')).toEqual(false);
    expect(phoneNumberIsValid('(330) 555|1234')).toEqual(false);
    expect(phoneNumberIsValid('(330) 555*1234')).toEqual(false);
  });

  xit('Handles international formatting', () => {
    expect(phoneNumberIsValid('+1-541-754-3010')).toEqual(true);
    expect(phoneNumberIsValid('001-541-754-3010')).toEqual(true);
  });

  xit('Handles full domestic formatting', () => {
    expect(phoneNumberIsValid('1-541-754-3010')).toEqual(true);
  });

  xit('Filters out letters as false', () => {
    expect(phoneNumberIsValid('1-ABC-754-3010')).toEqual(false);
    expect(phoneNumberIsValid('+1-541-754-WORD')).toEqual(false);
    expect(phoneNumberIsValid('33055512X4')).toEqual(false);
  });

});;
