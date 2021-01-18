import styled from "styled-components";

export const ContactSectionGrid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas:
    "top top top top"
    "personalInfo personalInfo profileImage profileImage "
    "personalInfo personalInfo profileImage profileImage"
    "personalInfo personalInfo profileImage profileImage "
    "bottom bottom bottom bottom  ";

  @media (max-width: 1220px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);
    grid-template-areas:
      "profileImage"
      "profileImage"
      "personalInfo"
      "personalInfo"
      "personalInfo";
  }
  transition: linear;
`;
