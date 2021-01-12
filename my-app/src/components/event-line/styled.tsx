import styled from "styled-components";
import { workExperienceColor } from "../../theme";

export const Line = styled.div`
  width: 1px;
  height: 100%;
  position: absolute;
  left: 50%;
  background-color: ${workExperienceColor};
`;

export const LinePointContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const TopCircle = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${workExperienceColor};
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 40%;
`;

export const BottomCircle = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${workExperienceColor};
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  left: 40%;
`;
