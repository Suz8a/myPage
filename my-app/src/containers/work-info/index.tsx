import React from "react";
import WorkEvent from "../../components/work-event";
import { MyStyledSection, Trapezoid, StyledWorkLine } from "./styled";

function WorkInfo() {
  return (
    <MyStyledSection>
      <Trapezoid />
      <StyledWorkLine />
      <WorkEvent
        year="2017"
        job="React front end developer"
        description="I collaborated in the development of a platform for station data deployment of the Instituto Tecnológico de Culiacán"
      />
    </MyStyledSection>
  );
}

export default WorkInfo;
