import { it, describe, expect } from "vitest";

describe("Name", () => {
  it("should pass", () => {
    expect(1).toEqual(1);
  });

  it("should fail", () => {
    expect("Drink").toEqual("Food");
  });
});
