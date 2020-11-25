export type Inventory = [
  [string, string, string],
  [string, string, string],
  [string, string, string],
  [string, string, string],
  [string, string, string]
];

export const generateEmptyInventory = (): Inventory => [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
