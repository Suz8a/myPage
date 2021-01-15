import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const Divider = styled.div`
  background-color: black;
  width: 100%;
  height: 4px;
  margin: 15px 0;
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
`;
export const TextContainer = styled.div`
  width: 100%;
  grid-area: name-job;
  margin-bottom: auto;
`;

export const LinksContainer = styled.div`
  width: 100%;
  grid-area: contact-link;
  margin-top: auto;
`;

export const MainButton = styled(Button)`
  width: 100%;
  height: 100px;
  border-radius: 20px;
  text-transform: none;

  @media (max-height: 960px) {
    height: 90px;
  }
`;

export const Anchor = styled.a`
  width: 100%;
  height: 100px;
  grid-area: button;
  text-decoration: none;
  margin-top: auto;
`;
