import React from "react";

import { DeckManagement } from "../components/deckManagement";
import { DiceManagement } from "../components/diceManagement";
import { InventoryManagement } from "../components/inventoryManagement";

export default function Home() {
  return (
    <>
      <h1>Welcome to A Torch on the Web!</h1>
      <DeckManagement />
      <DiceManagement />
      <InventoryManagement />
    </>
  );
}
