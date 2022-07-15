import React from "react";
import { RightSquare, LeftSquare } from "./styled";

type WorkLineProps = {
  className?: string;
};

function WorkLine({ className }: WorkLineProps) {
  return (
    <div className={className}>
      <RightSquare />
      <LeftSquare />
    </div>
  );
}

export default WorkLine;
