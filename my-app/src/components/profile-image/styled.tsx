import styled from "styled-components";

export const MyImage = styled.img`
  width: auto;
  height: 100%;
  border-radius: 50%;
  margin: auto 0 auto auto;
  @media (max-width: 1220px) {
    margin: auto;
  }
  grid-area: profileImage;
`;
