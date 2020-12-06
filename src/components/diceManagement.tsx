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
          <button className="button-primary" onClick={() => rollDice(0)}>
            Roll 0 dice
          </button>
          <button className="button-primary" onClick={() => rollDice(1)}>
            Roll 1 dice
          </button>
          <button className="button-primary" onClick={() => rollDice(2)}>
            Roll 2 dice
          </button>
          <button className="button-primary" onClick={() => rollDice(3)}>
            Roll 3 dice
          </button>
          <button className="button-primary" onClick={() => rollDice(4)}>
            Roll 4 dice
          </button>
          <button className="button-primary" onClick={() => rollDice(5)}>
            Roll 5 dice
          </button>
        </div>
        <div>
          {Boolean(rollResult) && (
            <p className={resultColor(rollResult)}>
              <b>{rollResult.toUpperCase()}</b>
            </p>
          )}
          {diceRolls.length > 0 && <p>Dice rolls: {diceRolls.join(" ")}</p>}
        </div>
      </div>
    </>
  );
};
