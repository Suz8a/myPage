import styled from "styled-components";
import IconCircle from "../../components/icon-circle";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import ComputerIcon from "@material-ui/icons/Computer";

export const ProjectsContainer = styled.div`
  width: 85%;
  height: 70vh;
  max-width: 1280px;
  min-height: 630px;
  box-sizing: border-box;
  background-color: #f5f9ff;
  border-radius: 20px;
  position: relative;
  display: flex;
  overflow: hidden;
  padding: 20px;
  @media (max-width: 1400px) {
    min-height: 700px;
  }
  @media (min-height: 1400px) {
    max-height: 750px;
  }
  @media (max-width: 1220px) {
    flex-direction: column;
    padding: 0 0 20px 20px;
  }
  @media (max-height: 650px) {
    margin: 60px 0;
  }
`;

export const TopProjectImage = styled.img`
  width: 450px;
  height: auto;
  position: absolute;
  top: -220px;
  left: 30px;
  box-shadow: 0px 2px 10px #b3b3b3;
  @media (max-width: 1400px) {
    top: -140px;
    left: 20px;
  }
  @media (max-width: 1220px) {
    top: -170px;
    width: 350px;
    left: 30px;
  }
`;

export const BottomProjectImage = styled.img`
  width: 600px;
  height: auto;
  position: absolute;
  bottom: -100px;
  left: 20%;
  box-shadow: 0px 2px 10px #b3b3b3;
  @media (max-width: 1400px) {
    left: 10%;
    bottom: -40px;
  }
  @media (max-width: 1220px) {
    bottom: -200px;
    left: 40%;
  }
`;

export const ProjectsImagesContainer = styled.div`
  height: 100%;
  width: 70%;
  position: relative;
  @media (max-width: 1220px) {
    width: 100%;
    height: 900px;
    background-color: red;
    overflow: hidden;
  }
`;

export const TextIconsContainer = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1220px) {
    align-items: center;
    text-align: center;
    width: 100%;
  }
`;

export const CirclesContainer = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  align-items: center;
  @media (max-width: 1220px) {
    width: fit-content;
    margin: 20px -45px 30px 0;
  }
`;

export const StyledIconCircle = styled(IconCircle)`
  color: #000000;
  margin-right: 45px;
  @media (max-width: 1220px) {
    width: 120px;
    height: 120px;
  }
`;

export const StyledPhoneIcon = styled(PhoneAndroidIcon)`
  width: 55px;
  height: auto;
  color: #3d7394;
`;

export const StyledLaptopIcon = styled(ComputerIcon)`
  width: 55px;
  height: auto;
  color: #3d7394;
`;

export const ProjectsTitle = styled.div`
  width: 100%;
  font-size: 30px;
  font-weight: 500;
  color: #000000;
`;

export const ProjectsLink = styled.a`
  width: fit-content;
  height: 40px;
  font-size: 32px;
  color: #000000;
  font-weight: 300;
  margin-top: 30px;
  text-decoration: none;
  border-bottom: 2px solid #000000;
  &:hover {
    color: hsl(0, 0%, 40%);
    border-bottom: 2px solid hsl(0, 0%, 40%);
  }
`;
