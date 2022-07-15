import styled from "styled-components";
import { workExperienceColor } from "../../theme";

export const Line = styled.div`
  width: 1.5px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto 0 auto;
  background-color: ${workExperienceColor};
`;

export const LinePointContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const TopCircle = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${workExperienceColor};
  border-radius: 50%;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto 0 auto;
`;

export const BottomCircle = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${workExperienceColor};
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto 0 auto;
`;
