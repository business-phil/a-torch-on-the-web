import React, { useState } from "react";

import { rollD6s, RollResultType } from "../services/dice.service";

const resultColor = (result: RollResultType) => {
  switch (result) {
    case RollResultType.CRITICAL:
      return "purple";
    case RollResultType.SUCCESS:
      return "green";
    case RollResultType.MIXED_SUCCESS:
      return "orange";
    case RollResultType.SUCCESS:
      return "red";
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
    <div>
      <h3>Dice Management</h3>
      <button onClick={() => rollDice(0)}>Roll 0 dice</button>
      <button onClick={() => rollDice(1)}>Roll 1 dice</button>
      <button onClick={() => rollDice(3)}>Roll 3 dice</button>
      <button onClick={() => rollDice(5)}>Roll 5 dice</button>
      {Boolean(rollResult) && (
        <p>
          Roll result:{" "}
          <b style={{ color: resultColor(rollResult) }}>
            {rollResult.toUpperCase()}
          </b>
        </p>
      )}
      {diceRolls.length > 0 && <p>Dice rolls: {diceRolls.join(" ")}</p>}
    </div>
  );
};
