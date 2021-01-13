import styled from "styled-components";
import IconCircle from "../../components/icon-circle";

export const ProjectsContainer = styled.div`
  width: 85%;
  height: 70vh;
  background-color: #f5f9ff;
  border-radius: 20px;
  position: relative;
  display: flex;
  overflow: hidden;
`;

export const TopProjectImage = styled.img`
  width: 450px;
  height: auto;
  position: absolute;
  top: -220px;
  left: 50px;
  box-shadow: 0px 2px 10px #b3b3b3;
`;

export const BottomProjectImage = styled.img`
  width: 600px;
  height: auto;
  position: absolute;
  bottom: -100px;
  left: 20%;
  box-shadow: 0px 2px 10px #b3b3b3;
`;

export const ProjectsImagesContainer = styled.div`
  height: 100%;
  width: 70%;
  position: relative;
`;

export const TextIconsContainer = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
`;

export const CirclesContainer = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  align-items: center;
`;

export const StyledIconCircle = styled(IconCircle)`
  color: #000000;
  margin-right: 50px;
`;
