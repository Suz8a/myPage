import React from "react";
import EventLine from "../event-line";
import {
  EventContainer,
  Label,
  LabelContainer,
  LabelTitle,
  Title,
  InfoContainer,
  Description,
  SquarePoint,
  LineTextContainer,
  LineContainer,
} from "./styled";

type WorkEventProps = {
  year: string;
  job: string;
  description: string;
  moveToBottom?: boolean;
  showSquarePoint: boolean;
  className?: string;
};

function WorkEvent({
  className,
  year,
  job,
  description,
  moveToBottom,
  showSquarePoint,
}: WorkEventProps) {
  return (
    <EventContainer moveToBottom={moveToBottom}>
      <LineTextContainer moveToBottom={moveToBottom}>
        <LineContainer>
          <EventLine />
        </LineContainer>
        <InfoContainer>
          <LabelContainer className={className}>
            <Label>
              <LabelTitle>{year}</LabelTitle>
            </Label>
          </LabelContainer>
          <Title>{job}</Title>
          <Description>{description}</Description>
        </InfoContainer>
      </LineTextContainer>
      <SquarePoint
        moveToBottom={moveToBottom}
        showSquarePoint={showSquarePoint}
      />
    </EventContainer>
  );
}

export default WorkEvent;
