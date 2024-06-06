describe("leap year specs", () => {
  describe("A year is a leap year if", () => {
    //const expectLeapYear = year => expect(isLeapYear(year)).toBeTruthy();

    it.each([2016, 1984, 4, 40])(
      "it is divisible by 4 but not by 100 (eg. %i)",
      (year) => expect(isLeapYear(year)).toBeTruthy()
    );
    it.each([2400, 2000, 400])("it is divisible by 400 (eg. %i)", (year) =>
      expect(isLeapYear(year)).toBeTruthy()
    );
  });

  describe("A year is *NOT*s a leap year ", () => {
    it("if it is not divisible by 4", () => {
      expect(isLeapYear(3)).toBeFalsy();
    });
    it("if it is divisible by 100 but not by 400", () => {
      expect(isLeapYear(100)).toBeFalsy();
    });
  });
});

const isLeapYear = (year) => {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0) return true;
  return false;
};
