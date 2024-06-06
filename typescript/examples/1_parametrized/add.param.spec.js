const add = (a, b) => a + b

test.each(
  [
    [1, 1.1, 2.1],
    [1, 2, 3],
    [2, 1, 3],
    [3, 3, 6]
  ]
  )(
  'add(%f, %f) => %f',
  (a, b, expected) => {
    expect(add(a, b)).toBe(expected);
  },
);


// test('add(1, 1) => 2',
//   () => {
//     expect(add(1, 1)).toBe(2);
//   },
// );

// test('add(1, 2) => 3',
//   () => { expect(add(1, 2)).toBe(3);},
// );
// test('add(2, 1) => 3',
//   () => { expect(add(2, 1)).toBe(3);},
// );