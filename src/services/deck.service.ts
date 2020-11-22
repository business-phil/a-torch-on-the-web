export enum CardSuiteType {
  CLUBS = "clubs",
  DIAMONDS = "diamonds",
  HEARTS = "hearts",
  SPADES = "spades",
  JOKER = "joker",
}

export interface Card {
  suit: CardSuiteType;
  value: string;
}

const FULL_DECK: Card[] = [
  { suit: CardSuiteType.CLUBS, value: "A" },
  { suit: CardSuiteType.CLUBS, value: "2" },
  { suit: CardSuiteType.CLUBS, value: "3" },
  { suit: CardSuiteType.CLUBS, value: "4" },
  { suit: CardSuiteType.CLUBS, value: "5" },
  { suit: CardSuiteType.CLUBS, value: "6" },
  { suit: CardSuiteType.CLUBS, value: "7" },
  { suit: CardSuiteType.CLUBS, value: "8" },
  { suit: CardSuiteType.CLUBS, value: "9" },
  { suit: CardSuiteType.CLUBS, value: "10" },
  { suit: CardSuiteType.CLUBS, value: "J" },
  { suit: CardSuiteType.CLUBS, value: "Q" },
  { suit: CardSuiteType.CLUBS, value: "K" },
  { suit: CardSuiteType.DIAMONDS, value: "A" },
  { suit: CardSuiteType.DIAMONDS, value: "2" },
  { suit: CardSuiteType.DIAMONDS, value: "3" },
  { suit: CardSuiteType.DIAMONDS, value: "4" },
  { suit: CardSuiteType.DIAMONDS, value: "5" },
  { suit: CardSuiteType.DIAMONDS, value: "6" },
  { suit: CardSuiteType.DIAMONDS, value: "7" },
  { suit: CardSuiteType.DIAMONDS, value: "8" },
  { suit: CardSuiteType.DIAMONDS, value: "9" },
  { suit: CardSuiteType.DIAMONDS, value: "10" },
  { suit: CardSuiteType.DIAMONDS, value: "J" },
  { suit: CardSuiteType.DIAMONDS, value: "Q" },
  { suit: CardSuiteType.DIAMONDS, value: "K" },
  { suit: CardSuiteType.HEARTS, value: "A" },
  { suit: CardSuiteType.HEARTS, value: "2" },
  { suit: CardSuiteType.HEARTS, value: "3" },
  { suit: CardSuiteType.HEARTS, value: "4" },
  { suit: CardSuiteType.HEARTS, value: "5" },
  { suit: CardSuiteType.HEARTS, value: "6" },
  { suit: CardSuiteType.HEARTS, value: "7" },
  { suit: CardSuiteType.HEARTS, value: "8" },
  { suit: CardSuiteType.HEARTS, value: "9" },
  { suit: CardSuiteType.HEARTS, value: "10" },
  { suit: CardSuiteType.HEARTS, value: "J" },
  { suit: CardSuiteType.HEARTS, value: "Q" },
  { suit: CardSuiteType.HEARTS, value: "K" },
  { suit: CardSuiteType.SPADES, value: "A" },
  { suit: CardSuiteType.SPADES, value: "2" },
  { suit: CardSuiteType.SPADES, value: "3" },
  { suit: CardSuiteType.SPADES, value: "4" },
  { suit: CardSuiteType.SPADES, value: "5" },
  { suit: CardSuiteType.SPADES, value: "6" },
  { suit: CardSuiteType.SPADES, value: "7" },
  { suit: CardSuiteType.SPADES, value: "8" },
  { suit: CardSuiteType.SPADES, value: "9" },
  { suit: CardSuiteType.SPADES, value: "10" },
  { suit: CardSuiteType.SPADES, value: "J" },
  { suit: CardSuiteType.SPADES, value: "Q" },
  { suit: CardSuiteType.SPADES, value: "K" },
  { suit: CardSuiteType.JOKER, value: "Joker" },
  { suit: CardSuiteType.JOKER, value: "Joker" },
];

export const getShuffledDeck = () => shuffleDeck(shuffleDeck([...FULL_DECK]));

const shuffleDeck = (arr: Card[]): Card[] => {
  let counter = arr.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);

    counter--;

    let temp = arr[counter];
    arr[counter] = arr[index];
    arr[index] = temp;
  }

  return arr;
};
