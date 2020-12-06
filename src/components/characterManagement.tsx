import React, { FC, useEffect, useState } from "react";

import {
  Character,
  fetchCharacter,
  generateCharacter,
  hasCharacterChanged,
  saveCharacter,
} from "../services/character.service";

const SkillButtons: FC<{
  atMaximumValue?: boolean;
  value: number;
  handleChange: (newValue: number) => void;
}> = ({ atMaximumValue = false, value, handleChange }) => (
  <>
    <button disabled={value < 1} onClick={() => handleChange(value - 1)}>
      Decrement
    </button>
    <button
      className="button-primary"
      disabled={atMaximumValue}
      onClick={() => handleChange(value + 1)}
    >
      Increment
    </button>
  </>
);

const CharacterOverview: FC<{
  character: Character;
  clearCharacter: () => void;
  updateCharacter: (newCharacter: Partial<Character>) => void;
}> = ({ character, clearCharacter, updateCharacter }) => {
  const [newSkill, setNewSkill] = useState<string>("");

  const { corruption, experience, name, skills, stress } = character;
  const hasMaxStress = stress > 5;
  const hasMaxCorruption = corruption > 5;
  const showNewSkillPrompt: boolean = experience >= skills.length;

  const changeStress = (newStress: number) => {
    if (newStress < 0 || newStress > 6) return;

    updateCharacter({
      stress: newStress,
    });
  };

  const changeCorruption = (newCorruption: number) => {
    if (newCorruption < 0 || newCorruption > 6) return;

    updateCharacter({
      corruption: newCorruption,
    });
  };

  const changeExperience = (newExperience: number) => {
    if (newExperience < 0) return;

    updateCharacter({
      experience: newExperience,
    });
  };

  const addNewSkill = (index: number) => {
    if (newSkill.length < 1 || experience < skills.length) return;

    const newSkills = Object.assign([...skills], { [index]: newSkill });

    updateCharacter({
      experience: experience - skills.length,
      skills: newSkills,
    });
    setNewSkill("");
  };

  return (
    <>
      <h3>{name}</h3>
      <button onClick={clearCharacter}>Clear character</button>
      <p className={hasMaxStress ? "redText" : ""}>Stress: {stress} </p>
      <SkillButtons
        atMaximumValue={hasMaxStress}
        handleChange={changeStress}
        value={stress}
      />
      <p className={hasMaxCorruption ? "redText" : "purpleText"}>
        Corruption: {corruption}{" "}
      </p>
      <SkillButtons
        atMaximumValue={hasMaxCorruption}
        handleChange={changeCorruption}
        value={corruption}
      />
      <p className={showNewSkillPrompt ? "greenText" : ""}>
        Experience: {experience}{" "}
      </p>
      <SkillButtons handleChange={changeExperience} value={experience} />
      {showNewSkillPrompt && (
        <div className="block">
          <label htmlFor="character.newSkill">New Skill:</label>{" "}
          <input
            type="text"
            id="character.newSkill"
            value={newSkill}
            onChange={e => setNewSkill(e.currentTarget.value)}
          />
        </div>
      )}
      <p>Skills:</p>
      <ul>
        {skills.map((skill, index) => (
          <li key={`${skill}-${index}`}>
            {skill}{" "}
            {showNewSkillPrompt && (
              <button onClick={() => addNewSkill(index)}>Replace skill</button>
            )}
          </li>
        ))}
        {showNewSkillPrompt && skills.length < 10 && (
          <button
            className="button-primary"
            onClick={() => addNewSkill(skills.length)}
          >
            Add new skill
          </button>
        )}
      </ul>
    </>
  );
};

const CreateCharacterForm: FC<{
  createCharacter: ({ name, skills }: Partial<Character>) => void;
}> = ({ createCharacter }) => {
  const [name, setName] = useState<string>("");
  const [skills, setSkills] = useState<string[]>(["", "", ""]);

  const isFormValid = Boolean(name) && skills.every(val => Boolean(val));

  const handleSkillChange = (index: number) => (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    const newSkills = Object.assign([...skills], {
      [index]: e.currentTarget.value,
    }) as string[];
    setSkills(newSkills);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createCharacter({ name, skills });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="block">
        <label htmlFor="character.name">Character name:</label>{" "}
        <input
          type="text"
          id="character.name"
          value={name}
          onChange={e => setName(e.currentTarget.value)}
        />
      </div>
      <div className="block">
        <label htmlFor="character.skill[0]">Skills:</label>{" "}
        {skills.map((skill, index) => (
          <input
            type="text"
            key={index}
            id={`character.skill[${index}]`}
            value={skill}
            onChange={handleSkillChange(index)}
          />
        ))}
      </div>
      <div className="block">
        <button type="submit" disabled={!isFormValid}>
          Create new character
        </button>
      </div>
    </form>
  );
};

export const CharacterManagement = () => {
  const [character, setCharacter] = useState<Character>();

  useEffect(() => {
    if (!hasCharacterChanged(character)) return;

    if (Boolean(character)) {
      saveCharacter(character);
    } else {
      setCharacter(fetchCharacter());
    }
  });

  const updateCharacter = (newCharacter: Partial<Character>) => {
    setCharacter({ ...character, ...newCharacter });
  };

  const createCharacter = ({
    name,
    skills,
  }: Pick<Character, "name" | "skills">) => {
    setCharacter(generateCharacter({ name, skills }));
  };

  const clearCharacter = () => {
    saveCharacter(null);
    setCharacter(null);
  };

  return (
    <>
      <h2>Character Management</h2>
      {Boolean(character) ? (
        <CharacterOverview
          character={character}
          clearCharacter={clearCharacter}
          updateCharacter={updateCharacter}
        />
      ) : (
        <CreateCharacterForm createCharacter={createCharacter} />
      )}
    </>
  );
};
