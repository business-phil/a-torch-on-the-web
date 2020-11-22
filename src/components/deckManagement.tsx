import React, { FC, useState } from "react";

import { Card, CardSuiteType, getShuffledDeck } from "../services/deck.service";

const cardColor = (suit: CardSuiteType) => {
  if (suit === CardSuiteType.DIAMONDS || suit === CardSuiteType.HEARTS) {
    return "red";
  } else if (suit === CardSuiteType.JOKER) {
    return "green";
  } else {
    return "black";
  }
};

const DiscardPile: FC<{ cards: Card[] }> = ({ cards }) => {
  if (cards.length < 1) return <></>;

  const topCard = cards[0];
  return (
    <p>
      Top card:{" "}
      <b style={{ color: cardColor(topCard.suit) }}>
        {topCard.suit === CardSuiteType.JOKER
          ? "Joker"
          : `${topCard.value} of ${topCard.suit}`}
      </b>
    </p>
  );
};

export const DeckManagement = () => {
  const [deck, setDeck] = useState<Card[]>(getShuffledDeck());
  const [discardPile, setDiscardPile] = useState<Card[]>([]);

  const drawCard = () => {
    if (deck.length < 1) {
      console.log("Unable to draw a card: deck is empty");
      return;
    }
    const [drawnCard, ...remainingCards] = [...deck];
    console.log(`Drew ${drawnCard.value} of ${drawnCard.suit}`);

    setDeck(remainingCards);
    setDiscardPile([drawnCard, ...discardPile]);
  };

  const resetDeck = () => {
    setDiscardPile([]);
    setDeck(getShuffledDeck());
  };

  return (
    <div>
      <h3>Deck Management</h3>
      <p>Cards in deck: {deck.length}</p>
      <button onClick={drawCard}>Draw card</button>
      <p>Cards in discard pile: {discardPile.length}</p>
      <DiscardPile cards={discardPile} />
      <button onClick={resetDeck}>Shuffle deck</button>
    </div>
  );
};
