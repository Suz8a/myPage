import React from "react";
import { Circle, CircleLabel, Label } from "./styled";

type SkillCircleProps = {
  src: string;
  alt: string;
};

function SkillCircle(props: SkillCircleProps) {
  return (
    <CircleLabel>
      <Label>{props.alt}</Label>
      <Circle src={props.src} alt={props.alt} />
    </CircleLabel>
  );
}

export default SkillCircle;
