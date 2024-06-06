import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

const BASE_URL = "https://swapi.dev/api";

const peopleWithEyeColor = async (color) => {
  const people = await (await fetch(BASE_URL + "/people/")).json();
  // console.log(people);
  return people.results.filter((p) => p.eye_color === color).map((p) => p.name);
};

describe("peopleWithEyeColor", () => {
  beforeEach(() => {
    fetchMock.doMock();
    fetch.resetMocks();
  });
  it("returns names of people with matching eye color", async () => {
    fetch.mockResponse(
      JSON.stringify({
        results: [{ name: "Luke", eye_color: "blue" }, { name: "Darth" }],
      })
    );
    const result = await peopleWithEyeColor("blue");
    const result2 = await peopleWithEyeColor("blue");
    expect(result2).toEqual(["Luke"]);
  });
});
