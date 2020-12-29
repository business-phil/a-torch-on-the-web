import React, { useState } from "react";

import { rollD6s, RollResultType } from "../services/dice.service";

const resultColor = (result: RollResultType) => {
  switch (result) {
    case RollResultType.CRITICAL:
      return "purpleText";
    case RollResultType.SUCCESS:
      return "greenText";
    case RollResultType.MIXED_SUCCESS:
      return "orangeText";
    case RollResultType.SUCCESS:
      return "redText";
  }
};

export const DiceManagement = () => {
  const [rollResult, setRollResult] = useState<RollResultType>();
  const [diceRolls, setDiceRolls] = useState<number[]>([]);

  const rollDice = (modifier: number) => {
    const { result, rolls } = rollD6s(modifier);
    setRollResult(result);
    setDiceRolls(rolls);
  };

  return (
    <>
      <h2>Dice Management</h2>
      <div className="grid-container halves">
        <div>
          {Boolean(rollResult) && (
            <p className={resultColor(rollResult)}>
              <b>{rollResult.toUpperCase()}</b>
            </p>
          )}
          {diceRolls.length > 0 && <p>Dice rolls: {diceRolls.join(" ")}</p>}
        </div>
        <div>
          {[0, 1, 2, 3, 4, 5].map(numberOfDice => (
            <button
              key={numberOfDice}
              className="button-primary rollButton"
              onClick={() => rollDice(numberOfDice)}
            >
              {`Roll ${numberOfDice} dice`}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
