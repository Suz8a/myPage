import React from "react";
import WorkEvent from "../../components/work-event";
import {
  MyStyledSection,
  Trapezoid,
  StyledWorkLine,
  EventsContainer,
} from "./styled";
import { workExperience } from "../../content/section-work-info";

function WorkInfo() {
  return (
    <MyStyledSection>
      <Trapezoid />
      <StyledWorkLine />
      <EventsContainer>
        {workExperience.map((work, index) => (
          <WorkEvent
            key={index}
            year={work.year}
            job={work.job}
            description={work.description}
            showSquarePoint={index !== workExperience.length - 1}
          />
        ))}
      </EventsContainer>
    </MyStyledSection>
  );
}

export default WorkInfo;
