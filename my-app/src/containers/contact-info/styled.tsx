import styled from "styled-components";

export const ContactInfoContainer = styled.div`
  width: 85%;
  height: 70vh;
  min-height: 630px;
  box-sizing: border-box;
  @media (min-width: 1220px) {
    height: 750px;
    max-width: 1280px;
  }
  @media (max-width: 1220px) {
    height: 90vh;
    width: 70%;
  }
`;
