import React from "react";
import { Line, LinePointContainer, Point } from "./styled";

type WorkLineProps = {
  className?: string;
};

function WorkLine({ className }: WorkLineProps) {
  return (
    <LinePointContainer className={className}>
      <Line />
      <Point />
    </LinePointContainer>
  );
}

export default WorkLine;
