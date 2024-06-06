const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const complicatedCalculation = async () => {
  await wait(200);
  return 42;
};

test("Async Spec", async () => {
  let result = await complicatedCalculation();
  expect(result).toEqual(42);
});
