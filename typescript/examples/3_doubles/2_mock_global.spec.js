import { jest } from "@jest/globals";

const greet = (name) => print("Hello " + name);

globalThis.print = jest.fn();

describe("Mock Example: greet", () => {
  beforeEach(() => {
    print.mockClear();
  });


  it("should print a greeting with Name", () => {
    greet("Alice");

    expect(print).toBeCalledWith("Hello Alice");
  });

  it("don't forget to clear", () => {
    // no execution
    expect(print).not.toBeCalledWith("Hello Alice");
  });
});

