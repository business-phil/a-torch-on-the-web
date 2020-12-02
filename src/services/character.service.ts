export interface Character {
  corruption: number;
  experience: number;
  name: string;
  skills: string[];
  stress: number;
}

export const generateCharacter = ({
  name,
  skills,
}: Pick<Character, "name" | "skills">): Character => {
  return { name, skills, experience: 0, stress: 0, corruption: 0 };
};

const CHARACTER_KEY = "torchCharacter";
const isBrowser = () => typeof window !== "undefined";

export const fetchCharacter = (): Character => {
  if (!isBrowser()) return null;

  const characterString = window.localStorage.getItem(CHARACTER_KEY);
  return Boolean(characterString) ? JSON.parse(characterString) : null;
};

export const saveCharacter = (character: Character) => {
  if (!isBrowser()) return;

  window.localStorage.setItem(CHARACTER_KEY, JSON.stringify(character));
};

export const hasCharacterChanged = (character: Character): boolean =>
  isBrowser() &&
  JSON.stringify(character) !== window.localStorage.getItem(CHARACTER_KEY);
