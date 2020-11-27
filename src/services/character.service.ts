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
