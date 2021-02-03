import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const Divider = styled.div`
  background-color: black;
  width: 100%;
  height: 4px;
  margin: 15px 0;
  @media (max-width: 560px) {
    height: 2px;
  }
`;

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "name-job"
    "contact-link"
    "button";
  grid-area: personalInfo;
  @media (max-width: 1220px) {
    text-align: center;
  }
`;
export const TextContainer = styled.div`
  width: 100%;
  grid-area: name-job;
  margin-bottom: auto;
`;

export const Name = styled.div`
  font-size: 60px;
  font-weight: 500;

  @media (max-width: 560px) {
    font-size: 35px;
  }
`;

export const Job = styled.div`
  font-size: 35px;
  font-weight: "lighter";
  @media (max-width: 560px) {
    font-size: 25px;
  }
`;

export const ButtonText = styled.div`
  font-size: 35px;
  font-weight: 500;
  @media (max-width: 560px) {
    font-size: 30px;
  }
`;

export const LinksContainer = styled.div`
  width: 100%;
  grid-area: contact-link;
  display: flex;
  margin: 0 -15px;
  @media (min-width: 1221px) {
    margin-top: auto;
  }
  @media (max-width: 1220px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
`;

export const MainButton = styled(Button)`
  width: 100%;
  height: 100px;
  border-radius: 20px;
  text-transform: none;
  margin-top: auto;
  grid-area: button;

  @media (max-width: 560px) {
    margin-top: 40px;
  }

  @media (max-height: 960px) and (min-width: 1220px) {
    height: 90px;
  }

  @media (max-width: 1220px) {
    border-radius: 50px;
    height: 60px;
  }
`;
