import { generateEmptyInventory } from "../inventory.service";

describe("generateEmptyInventory", () => {
  it("returns an empty 3x5 array", () => {
    const actual = generateEmptyInventory();
    expect(actual).toEqual([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  });
});
