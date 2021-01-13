import React, { ReactNode } from "react";
import { Circle } from "./styled";

type IconCircleProps = {
  children: ReactNode;
};

function IconCircle({ children }: IconCircleProps) {
  return <Circle>{children}</Circle>;
}

export default IconCircle;
