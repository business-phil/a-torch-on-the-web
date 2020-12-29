import React, { useState } from "react";

import {
  generateEmptyInventory,
  Inventory,
} from "../services/inventory.service";

export const InventoryManagement = () => {
  const [itemName, setItemName] = useState<string>("");
  const [inventory, setInventory] = useState<Inventory>(
    generateEmptyInventory()
  );

  const addItem = (item: string, rowIndex: number, columnIndex: number) => {
    const newRow = Object.assign([...inventory[rowIndex]], {
      [columnIndex]: item,
    }) as Inventory[0];
    const newInventory = Object.assign([...inventory], {
      [rowIndex]: newRow,
    }) as Inventory;
    setInventory(newInventory);
  };

  return (
    <div>
      <h2>Inventory Management</h2>
      <div className="block">
        <label htmlFor="inventory.newItem">Add item to inventory:</label>{" "}
        <input
          type="text"
          id="inventory.newItem"
          value={itemName}
          onChange={e => setItemName(e.currentTarget.value)}
        />
      </div>
      {inventory.map((row, rowIndex) => (
        <div className="block" key={rowIndex}>
          {row.map((item, columnIndex) => (
            <div className="inventoryBox" key={`${rowIndex}:${columnIndex}`}>
              <p className="itemName">{item}</p>
              <button onClick={() => addItem(itemName, rowIndex, columnIndex)}>
                Add item
              </button>
              <button
                className={Boolean(item) ? "" : "invisible"}
                onClick={() => addItem("", rowIndex, columnIndex)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
