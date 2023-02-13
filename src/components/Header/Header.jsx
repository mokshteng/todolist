import React, { useState } from "react";
import Button from "../Button/Button";

import "./header.css";

function Header({ addItem, containerID }) {
  const [input, setInput] = useState("");
  return (
    <div className="header">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button text={"Add"} action={() => addItem(input,containerID)} />
    </div>
  );
}

export default Header;
