import React from "react";

import { DeckManagement } from "../components/deckManagement";
import { DiceManagement } from "../components/diceManagement";

export default function Home() {
  return (
    <>
      <div>Welcome to A Torch on the Web!</div>
      <DeckManagement />
      <DiceManagement />
    </>
  );
}
