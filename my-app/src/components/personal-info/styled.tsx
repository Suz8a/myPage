import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const Divider = styled.div`
  background-color: black;
  width: 100%;
  height: 4px;
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
  margin-right: 50px;
`;
export const TextContainer = styled.div`
  width: 100%;
  grid-area: name-job;
  margin-bottom: auto;
`;

export const LinksContainer = styled.div`
  width: 100%;
  grid-area: contact-link;
  margin: auto 0;
`;

export const MainButton = styled(Button)`
  width: 100%;
  height: 100px;
  border-radius: 20px;
  text-transform: none;
  grid-area: button;
  margin-top: auto;
`;
