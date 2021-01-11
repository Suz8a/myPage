import React from "react";
import { MyStyledSection, Trapezoid } from "./styled";
import WorkEvent from "../../components/work-event";

function WorkInfo() {
  return (
    <MyStyledSection>
      <Trapezoid />
      <WorkEvent
        year="2017"
        job="React front end developer"
        description="I collaborated in the development of a platform for station data deployment of the Instituto Tecnológico de Culiacán"
      />
    </MyStyledSection>
  );
}

export default WorkInfo;
