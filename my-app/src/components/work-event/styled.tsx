import styled from "styled-components";
import { workExperienceColor } from "../../theme";

type EventProps = {
  moveToBottom?: boolean;
  showSquarePoint?: boolean;
};

export const Label = styled.div`
  width: 100%;
  height: 0;
  border-top: 50px solid ${workExperienceColor};
  border-right: 50px solid transparent;
`;

export const LabelTitle = styled.div`
  width: 100%;
  text-align: left;
  position: absolute;
  top: 15px;
  left: 20px;
  font-size: 20px;
  color: #ffffff;
  font-weight: 600;
`;

export const LabelContainer = styled.div`
  width: 220px;
  position: relative;
  @media (max-width: 400px) {
    width: 160px;
  }
`;

export const EventContainer = styled.div<EventProps>`
  width: 360px;
  height: 280px;
  position: relative;
  background-color: #917c7c;
  @media (min-width: 1400px) {
    ${({ moveToBottom }) =>
      moveToBottom ? "margin-top:auto" : "padding-top: 8px;"}
  }
  @media (max-width: 1400px) {
    width: 360px;
    height: 400px;
    margin: 15px 0;
  }
  @media (max-width: 400px) {
    width: 90%;
    height: 400px;
    margin: 15px 0;
  }
`;

export const Title = styled.div`
  width: 300px;
  height: 35px;
  text-align: left;
  color: #000000;
  font-size: 25px;
  margin: 10px 0 10px 0;
  font-weight: 500;
  @media (max-width: 880px) {
    width: 100%;
    height: fit-content;
  }
`;

export const Description = styled.div`
  width: 100%;
  height: 100%;
  color: #545454;
  font-size: 20px;
`;

export const InfoContainer = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  margin-left: auto;
  flex-direction: column;
`;

export const SquarePoint = styled.div<EventProps>`
  width: 48px;
  height: 48px;
  background-color: ${workExperienceColor};
  border-radius: 10px;
  position: absolute;
  left: 7.5px;
  @media (min-width: 1400px) {
    ${({ moveToBottom }) => (moveToBottom ? "top:0;" : "bottom:0;")}
  }

  @media (max-width: 1400px) {
    bottom: 0;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    left: 7.5px;
    ${({ showSquarePoint }) => (!showSquarePoint ? "display:none;" : "")}
  }
`;

export const LineTextContainer = styled.div<EventProps>`
  width: 100%;
  height: 80%;
  display: flex;
  @media (min-width: 1400px) {
    ${({ moveToBottom }) =>
      moveToBottom ? "position:absolute; bottom:0;" : "top:0;"}
  }
  @media (max-width: 1400px) {
    top: 0;
    height: 80%;
  }
`;

export const LineContainer = styled.div`
  height: 100%;
  width: 20%;
`;
