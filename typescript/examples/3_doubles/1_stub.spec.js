// test double

// dummies -> spy
// fake -> spy
// stubs -> spy
// mocks -> spy

import { jest } from "@jest/globals";

class Person {
  read() {
    return "dsafskhj";
  }

  fullName() {
    const personData = this.read();
    // console.log(personData);
    return personData.firstName + " " + personData.name;
  }
}

describe("Stub Example", () => {
  it("should return full name of Person from API", () => {
    const p = new Person();
    const spy = jest.spyOn(p, "read");

    spy.mockReturnValue({ name: "Wonder", firstName: "Alice" });

    p.fullName();

    // expect(spy).toHaveBeenCalledTimes(2)
    expect(p.fullName()).toEqual("Alice Wonder");
  });
});
