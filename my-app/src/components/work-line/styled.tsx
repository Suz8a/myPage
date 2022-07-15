import styled from "styled-components";
import { workExperienceColor } from "../../theme";

export const RightSquare = styled.div`
  position: absolute;
  width: 40%;
  height: 350px;
  top: 100px;
  left: 50%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top: 3px solid black;
  border-right: 3px solid black;
  border-bottom: 3px solid black;
  border-color: ${workExperienceColor};
`;

export const LeftSquare = styled.div`
  position: absolute;
  width: 40%;
  height: 350px;
  top: 453px;
  left: 10%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top: 3px solid black;
  border-left: 3px solid black;
  border-bottom: 3px solid black;
  border-color: ${workExperienceColor};
`;
