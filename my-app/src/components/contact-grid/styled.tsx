import styled from "styled-components";

export const ContactSectionGrid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas:
    "top top top top top top"
    "left name-job name-job profileImage profileImage right"
    "left contact-link contact-link profileImage profileImage right"
    "left button button profileImage profileImage right"
    "bottom bottom bottom bottom bottom bottom";
`;
