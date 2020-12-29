import React, { FC, useState } from "react";

import {
  Card,
  CardSuiteType,
  generateShuffledDeck,
} from "../services/deck.service";

const cardColor = (suit: CardSuiteType) => {
  if (suit === CardSuiteType.DIAMONDS || suit === CardSuiteType.HEARTS) {
    return "redText";
  } else if (suit === CardSuiteType.JOKER) {
    return "purpleText";
  } else {
    return "";
  }
};

const FaceUpCard: FC<{ card: Card }> = ({ card }) => (
  <p className={cardColor(card.suit)}>
    <b>
      {card.suit === CardSuiteType.JOKER
        ? "Joker"
        : `${card.value} of ${card.suit}`}
    </b>
  </p>
);

export const DeckManagement = () => {
  const [deck, setDeck] = useState<Card[]>(generateShuffledDeck());
  const [discardPile, setDiscardPile] = useState<Card[]>([]);

  const drawCard = () => {
    if (deck.length < 1) return;

    const [drawnCard, ...remainingCards] = [...deck];
    console.log(`Drew ${drawnCard.value} of ${drawnCard.suit}`);

    setDeck(remainingCards);
    setDiscardPile([drawnCard, ...discardPile]);
  };

  const resetDeck = () => {
    setDiscardPile([]);
    setDeck(generateShuffledDeck());
  };

  return (
    <>
      <h2>Deck Management</h2>
      <div className="grid-container halves">
        <div>
          <p>Cards in discard pile: {discardPile.length}</p>
          {discardPile.length > 0 && <FaceUpCard card={discardPile[0]} />}
        </div>
        <div id="cardSection">
          <p>Cards in deck: {deck.length}</p>
          <button
            className="button-primary"
            disabled={deck.length < 1}
            onClick={drawCard}
          >
            Draw card
          </button>
          <button onClick={resetDeck}>Shuffle deck</button>
        </div>
      </div>
    </>
  );
};
