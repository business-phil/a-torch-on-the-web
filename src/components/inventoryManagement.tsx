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

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setItemName(e.currentTarget.value);
  };

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
      <h3>Inventory Management</h3>
      Add item to inventory:{" "}
      <input type="text" value={itemName} onChange={handleChange} />
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
