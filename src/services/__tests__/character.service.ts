import { generateCharacter } from "../character.service";

describe("generateCharacter", () => {
  it("returns a Character object with a given name and skills", () => {
    const actual = generateCharacter({
      name: "Test Name",
      skills: ["one skill", "another", "a third"],
    });
    expect(actual).toEqual({
      corruption: 0,
      experience: 0,
      name: "Test Name",
      skills: ["one skill", "another", "a third"],
      stress: 0,
    });
  });
});
