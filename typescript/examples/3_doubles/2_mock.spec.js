import { jest } from "@jest/globals";

const print = (text) => console.log(text + "\n");

// functional dependency injection
const greet = (name, extPrint = print) => extPrint("Hello " + name);

describe("Mock Example: greet", () => {
  it("should print a greeting with Name", () => {
    const printSpy = jest.fn();
    greet("Alice", printSpy);
    expect(printSpy).toBeCalledWith("Hello Alice");
  });
});

// greet("Steve", () => {});
