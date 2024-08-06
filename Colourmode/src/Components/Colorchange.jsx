import React, { useState } from "react";

function Colorchange() {
  const [selectedColor, setColor] = useState("");

  const colorchangehandler = (event) => {
    setColor(event.target.value);
  };

  return (
    <div
      style={{
        backgroundColor: selectedColor,
        height: "100vh",
        padding: "50px",
      }}
    >
      <h1 className="text-center">
        <mark>Colour Change Dropdown</mark>
      </h1>
      <select
        value={selectedColor}
        onChange={colorchangehandler}
        className="center"
      >
        <option value="">Select color</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="pink">Pink</option>
        <option value="purple">Purple</option>
      </select>
    </div>
  );
}

export default Colorchange;
