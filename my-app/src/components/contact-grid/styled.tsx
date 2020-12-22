import styled from "styled-components";

export const ContactSectionGrid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas:
    "top top top top top top"
    "left personalInfo personalInfo profileImage profileImage right"
    "left personalInfo personalInfo profileImage profileImage right"
    "left personalInfo personalInfo profileImage profileImage right"
    "bottom bottom bottom bottom bottom bottom";
  background-color: lightblue;
`;
