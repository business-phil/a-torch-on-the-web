import React from "react";

import { CharacterManagement } from "../components/characterManagement";
import { DeckManagement } from "../components/deckManagement";
import { DiceManagement } from "../components/diceManagement";
import { InventoryManagement } from "../components/inventoryManagement";
import { SEO } from "../components/seo";

export default function Home() {
  return (
    <div className="grid-container full">
      <SEO />
      <h1>Welcome to A Torch on the Web!</h1>
      <div className="grid-container halves">
        <div className="item">
          <CharacterManagement />
        </div>
        <div className="item">
          <InventoryManagement />
        </div>
        <div className="item">
          <DeckManagement />
        </div>
        <div className="item">
          <DiceManagement />
        </div>
      </div>
    </div>
  );
}
