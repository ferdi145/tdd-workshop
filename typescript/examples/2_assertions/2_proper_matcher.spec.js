describe("don't ask for length, use proper assertion", () => {
  const someString = "Hello World";

  it("don't", () => expect(someString.length).toEqual(11));

  it("do", () => expect(someString).toHaveLength(11));
});

describe("greater than", () => {
  const value = 5;

  it("don't", () => expect(value > 4).toBeTruthy());
  it("do", () => expect(value).toBeGreaterThan(4));
});

describe("toBeCloseTo", () => {
  const value = 5.12345;

  it("don't", () => expect(value).toEqual(5.12345));
  it("do", () => expect(value).toBeCloseTo(5.123, 3));
});
