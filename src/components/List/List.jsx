import React from "react";
import Item from "../Item/Item";
import "./list.css";

function List({ list, deleteItem,containerID }) {
  const items = list.map((val) => {
    return (
      <Item
        key={val.itemID}
        itemID={val.itemID}
        text={val.text}
        deleteItem={deleteItem}
        containerID={containerID}
      />
    );
  });

  return <div className="list">{items}</div>;
}

export default List;
