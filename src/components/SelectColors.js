import React from "react";

import Colors from "./Colors";

import { ColorConsumer } from "../contexts/color";

export default () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderBottom: "1px solid lightgray",
        paddingBottom: "19.920px",
      }}
    >
      <h2>색상을 선택하세요.</h2>
      <ColorConsumer>{Colors}</ColorConsumer>
    </div>
  );
};
