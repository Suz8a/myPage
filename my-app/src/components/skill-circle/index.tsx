import React from "react";
import { Circle } from "./styled";

type SkillCircleProps = {
  src: string;
  alt: string;
};

function SkillCircle(props: SkillCircleProps) {
  return <Circle src={props.src} alt={props.alt} />;
}

export default SkillCircle;
