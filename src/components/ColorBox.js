import React, { useContext } from "react";
import ColorContext from "../contexts/color";

const ColorBox = () => {
  const { state } = useContext(ColorContext);
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        paddingBottom: "21.280px",
        borderBottom: "1px solid lightgray",
      }}
    >
      <div style={style}>
        <h4>마우스 좌클릭</h4>
        <div
          style={{
            width: "64px",
            height: "64px",
            background: state.color,
          }}
        />
      </div>
      <div style={style}>
        <h4>마우스 우클릭</h4>
        <div
          style={{
            width: "64px",
            height: "64px",
            background: state.subColor,
          }}
        />
      </div>
    </div>
  );
};

export default ColorBox;
