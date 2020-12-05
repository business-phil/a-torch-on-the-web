import React from "react";

import { CharacterManagement } from "../components/characterManagement";
import { DeckManagement } from "../components/deckManagement";
import { DiceManagement } from "../components/diceManagement";
import { InventoryManagement } from "../components/inventoryManagement";
import { SEO } from "../components/seo";

export default function Home() {
  return (
    <>
      <SEO />
      <h1>Welcome to A Torch on the Web!</h1>
      <CharacterManagement />
      <InventoryManagement />
      <DeckManagement />
      <DiceManagement />
    </>
  );
}
