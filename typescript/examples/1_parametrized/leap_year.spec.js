
describe('leap year specs', () => {
  describe('A year is a leap year if', () => {
    it('is divisible by 4 but not by 100', () => {
      expect(isLeapYear(2016)).toBeTruthy()
    });

    it('is divisible by 400', () => {
      expect(isLeapYear(2000)).toBeTruthy()
    });
  });

  describe('A year is *NOT* a leap year if', () => {
    it('is not divisible by 4', () => {
      expect(isLeapYear(3)).toBeFalsy();
    });
    it('is divisible by 100 but not by 400', () => {
      expect(isLeapYear(100)).toBeFalsy();
    });
  });
});

const isLeapYear = year => {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0) return true;
  return false;
}


