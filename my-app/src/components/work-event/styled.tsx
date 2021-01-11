import styled from "styled-components";
import { workExperienceColor } from "../../theme";

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
`;

export const EventContainer = styled.div`
  width: 360px;
  height: 400px;
  position: relative;
`;

export const Title = styled.div`
  width: 300px;
  height: 35px;
  text-align: left;
  color: #000000;
  font-size: 25px;
  margin: 10px 0 10px 0;
  font-weight: 500;
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

export const SquarePoint = styled.div`
  width: 70px;
  height: 70px;
  background-color: ${workExperienceColor};
  border-radius: 25px;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const LineTextContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
`;

export const LineContainer = styled.div`
  height: 100%;
  width: 20%;
`;
