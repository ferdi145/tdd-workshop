test("toEqual does deep equal", () =>
  expect({
    key1: [1, 2, 4, 4],
    key2: [5, 6, 7, 8],
  }).toEqual({
    key1: [1, 2, 4, 4],
    key2: [5, 6, 7, 8],
  }));

test("toEqual compares strings by line", () =>
  expect("Hello\nBrave\nWorld").toEqual("Hello\nBrave\nWorld"));
