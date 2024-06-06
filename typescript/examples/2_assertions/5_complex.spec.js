test("toHaveProperty", () => {
  const houseForSale = {
    bath: true,
    bedrooms: 4,
    kitchen: {
      amenities: ["oven", "stove", "washer"],
      area: 20,
    },
  };

  expect(houseForSale).toHaveProperty("bath");
  expect(houseForSale).toHaveProperty("kitchen.amenities", [
    "oven",
    "stove",
    "washer",
  ]);
});

test("toMatchObject", () => {
  const houseForSale = {
    bath: false,
    bedrooms: 4,
    kitchen: {
      amenities: ["oven", "stove", "washer"],
      area: 20,
      wallColor: "white",
    },
  };
  const desiredHouse = {
    bath: expect.any(Boolean),
    kitchen: {
      amenities: ["oven", "stove", "washer"],
      wallColor: expect.stringMatching(/white|yellow/),
    },
  };

  expect(houseForSale).toMatchObject(desiredHouse);
});
