import styled from "styled-components";

export const MyLinkContact = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transition: 0.1s linear;
  margin-right: 20px;

  &:hover {
    filter: grayscale(100%);
    transform: scale(1.1);
  }
`;
