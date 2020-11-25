import { rollD6s, RollResultType } from "../dice.service";

describe("rollD6s", () => {
  describe("zero or negative modifiers", () => {
    it("rolls and returns two dice", () => {
      let actual = rollD6s(0);
      expect(actual.rolls).toHaveLength(2);
      actual = rollD6s(-1);
      expect(actual.rolls).toHaveLength(2);
    });

    it("returns a result using the lowest of two rolls", () => {
      let actual = rollD6s(0, () => [1, 6]);
      expect(actual.result).toEqual(RollResultType.FAILURE);
      actual = rollD6s(0, () => [3, 3]);
      expect(actual.result).toEqual(RollResultType.FAILURE);
      actual = rollD6s(0, () => [6, 4]);
      expect(actual.result).toEqual(RollResultType.MIXED_SUCCESS);
      actual = rollD6s(0, () => [6, 6]);
      expect(actual.result).toEqual(RollResultType.SUCCESS);
    });
  });

  describe("positive modifier", () => {
    it("rolls and returns a number of dice equal to the modifier", () => {
      [1, 2, 4, 7].forEach(modifier => {
        let actual = rollD6s(modifier);
        expect(actual.rolls).toHaveLength(modifier);
      });
    });

    it("returns a result using the highest roll", () => {
      let actual = rollD6s(1, () => [6]);
      expect(actual.result).toEqual(RollResultType.SUCCESS);
      actual = rollD6s(2, () => [1, 5]);
      expect(actual.result).toEqual(RollResultType.MIXED_SUCCESS);
      actual = rollD6s(3, () => [6, 4, 2]);
      expect(actual.result).toEqual(RollResultType.SUCCESS);
      actual = rollD6s(4, () => [6, 1, 2, 6]);
      expect(actual.result).toEqual(RollResultType.CRITICAL);
    });
  });
});
