import React from "react";
import { Circle } from "./styled";

export type SkillCircleProps = {
  src: string;
  alt: string;
};

const SkillCircle = (props: SkillCircleProps) => {
  return <Circle src={props.src} alt={props.alt} />;
};

export default SkillCircle;
