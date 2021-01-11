import React from "react";
import { BottomCircle, Line, LinePointContainer, TopCircle } from "./styled";

function EventLine() {
  return (
    <LinePointContainer>
      <TopCircle />
      <Line />
      <BottomCircle />
    </LinePointContainer>
  );
}

export default EventLine;
