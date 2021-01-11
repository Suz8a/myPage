import styled from "styled-components";
import { workExperienceColor } from "../../theme";

export const Line = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${workExperienceColor};
  position: absolute;
  top: 40%;
`;

export const Point = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${workExperienceColor};
  border-radius: 50%;
  position: absolute;
  right: 0;
`;

export const LinePointContainer = styled.div`
  width: 100%;
  position: relative;
  height: 20px;
`;
