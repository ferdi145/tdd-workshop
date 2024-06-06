import { jest } from "@jest/globals";
import fetch from "isomorphic-fetch";

const BASE_URL = "https://swapi.dev/api";

const fetchPeople = async (extFetch = fetch) => {
  try {
    return (await (await extFetch(BASE_URL + "/people/")).json()).results;
  } catch (error) {
    if (process.env.NODE_ENV !== "test") console.error({ error });
    throw new Error("Can't receive people from server");
  }
};

const peopleWithEyeColor = async (color, allPeople) => {
  return allPeople.filter((p) => p.eye_color === color).map((p) => p.name);
};

describe("peopleWithEyeColor", () => {
  it("returns names of people with matching eye color", async () => {
    const people = [{ eye_color: "blue", name: "Luke" }];
    const result = await peopleWithEyeColor("blue", people);

    expect(result).toEqual(["Luke"]);
  });
  it("does not return names of people with wrong eye color", async () => {
    const people = [{ eye_color: "grey", name: "Luke" }];
    const result = await peopleWithEyeColor("blue", people);

    expect(result).toEqual([]);
  });
});

describe("fetchPeople", () => {
  it("returns a people array from star wars", async () => {
    expect.assertions(3);

    const fetchSpy = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({ results: [{ name: "Luke" }, { name: "Darth" }] }),
      })
    );
    const result = await fetchPeople(fetchSpy);
    expect(result).toHaveLength(2);
    expect(result).toContainEqual({ name: "Luke" });
    expect(fetchSpy).toBeCalledWith(expect.stringMatching(/people\/$/));
  });
  it("throws an error", async () => {
    expect.assertions(1);

    const fetchSpy = jest.fn(() => Promise.reject(new Error("oh f*k")));

    const result = fetchPeople(fetchSpy);
    await expect(result).rejects.toThrowError(
      "Can't receive people from server"
    );
  });
});

/*

Note:
 * don't mock what you don't own => maybe use a fetch wrapper
 * https://www.leighhalliday.com/mock-fetch-jest
*/
