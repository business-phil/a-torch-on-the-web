import { CardSuiteType, FULL_DECK, getShuffledDeck } from "../deck.service";

describe("getShuffledDeck", () => {
  it("returns a full deck of cards", () => {
    let suitCount = {};
    getShuffledDeck().forEach(card => {
      if (Boolean(suitCount[card.suit])) {
        suitCount[card.suit]++;
      } else {
        suitCount[card.suit] = 1;
      }
    });
    expect(suitCount[CardSuiteType.CLUBS]).toEqual(13);
    expect(suitCount[CardSuiteType.DIAMONDS]).toEqual(13);
    expect(suitCount[CardSuiteType.HEARTS]).toEqual(13);
    expect(suitCount[CardSuiteType.SPADES]).toEqual(13);
    expect(suitCount[CardSuiteType.JOKER]).toEqual(2);
  });

  it("returns a shuffled deck", () => {
    expect(getShuffledDeck()).not.toEqual(FULL_DECK);
  });
});
