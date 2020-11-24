export enum RollResultType {
  CRITICAL = "critical",
  SUCCESS = "success",
  MIXED_SUCCESS = "mixed",
  FAILURE = "failure",
}

export interface RollResponse {
  result: RollResultType;
  rolls: number[];
}

const rollD6 = (): number => 1 + Math.floor(Math.random() * 6);

const getRollResult = (roll: number): RollResultType => {
  if (roll > 5) {
    return RollResultType.SUCCESS;
  } else if (roll > 3) {
    return RollResultType.MIXED_SUCCESS;
  } else {
    return RollResultType.FAILURE;
  }
};

const isCritical = (rolls: number[]): boolean => {
  const count6s = (acc: number, val: number) => (val === 6 ? acc + 1 : acc);
  return rolls.reduce(count6s, 0) > 1 ? true : false;
};

export const rollD6s = (modifier: number): RollResponse => {
  if (modifier < 1) {
    const rolls = [rollD6(), rollD6()];
    const result = getRollResult(Math.min(...rolls));
    return { result, rolls };
  }

  const rolls = Array.from(Array(modifier), rollD6);
  const result = getRollResult(Math.max(...rolls));
  if (result === RollResultType.SUCCESS && isCritical(rolls))
    return { result: RollResultType.CRITICAL, rolls };
  return { result, rolls };
};
