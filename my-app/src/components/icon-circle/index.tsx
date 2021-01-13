import React, { ReactNode } from "react";
import { Circle } from "./styled";

type IconCircleProps = {
  children: ReactNode;
  className?: string;
};

function IconCircle({ children, className }: IconCircleProps) {
  return <Circle className={className}>{children}</Circle>;
}

export default IconCircle;
