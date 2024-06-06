import { jest } from "@jest/globals";

const BASE_URL = "https://swapi.dev/api";

const peopleWithEyeColor = async (color) => {
  const people = await (await fetch(BASE_URL + "/people/")).json();
  // console.log(people);
  return people.results.filter((p) => p.eye_color === color).map((p) => p.name);
};

globalThis.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        results: [{ name: "Luke", eye_color: "blue" }, { name: "Darth" }],
      }),
  })
);

describe("peopleWithEyeColor", () => {
  beforeEach(() => {
    globalThis.fetch.mockClear();
  });
  it("returns names of people with matching eye color", async () => {
    const result = await peopleWithEyeColor("blue");
    expect(result).toEqual(["Luke"]);
  });
});
