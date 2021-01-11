import React from "react";
import { Circle, CircleLabel, Label } from "./styled";

type SkillCircleProps = {
  src: string;
  alt: string;
};

function SkillCircle({ src, alt }: SkillCircleProps) {
  return (
    <CircleLabel>
      <Label text={alt}>{alt}</Label>
      <Circle src={src} alt={alt} />
    </CircleLabel>
  );
}

export default SkillCircle;
