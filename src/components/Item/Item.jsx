import React from "react";
import Button from "../Button/Button";
import "./item.css";

function Item({ text, deleteItem, itemID, containerID }) {
  return (
    <div className="item">
      <div>{text}</div>
      <Button text={"Delete"} action={() => deleteItem(itemID,containerID)} />
    </div>
  );
}

export default Item;
