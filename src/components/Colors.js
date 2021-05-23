import React from "react";

import { COLORS } from "../constants";

const Color = ({ color, onClick, onContextMenu }) => {
  return (
    <div
      style={{
        width: "24px",
        height: "24px",
        cursor: "pointer",
        background: color,
      }}
      onClick={() => onClick(color)}
      onContextMenu={(e) => {
        e.preventDefault();
        onContextMenu(color);
      }}
    />
  );
};

const Colors = ({ actions }) => {
  const handleClick = (color) => actions.setColor(color);
  const handleContextMenu = (color) => actions.setSubColor(color);

  return (
    <div style={{ display: "flex" }}>
      {COLORS.map((color) => (
        <Color
          key={color}
          color={color}
          onClick={handleClick}
          onContextMenu={handleContextMenu}
        />
      ))}
    </div>
  );
};

export default Colors;
