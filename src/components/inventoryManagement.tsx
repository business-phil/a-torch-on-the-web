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
      <div style={{ display: "block" }}>
        <label htmlFor="inventory.newItem">Add item to inventory:</label>{" "}
        <input
          type="text"
          id="inventory.newItem"
          value={itemName}
          onChange={e => setItemName(e.currentTarget.value)}
        />
      </div>
      {inventory.map((row, rowIndex) => (
        <div style={{ display: "block" }} key={rowIndex}>
          {row.map((item, columnIndex) => (
            <div
              style={{
                backgroundColor: "whitesmoke",
                display: "inline-block",
                height: "100px",
                margin: "4px",
                textAlign: "center",
                verticalAlign: "top",
                width: "120px",
              }}
              key={`${rowIndex}:${columnIndex}`}
            >
              <p
                style={{
                  height: "2em",
                  lineHeight: "1em",
                  margin: "0.75em 0.25em",
                }}
              >
                {item}
              </p>
              <button onClick={() => addItem(itemName, rowIndex, columnIndex)}>
                Add item
              </button>
              {Boolean(item) && (
                <button onClick={() => addItem("", rowIndex, columnIndex)}>
                  Remove item
                </button>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
