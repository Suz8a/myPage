import styled from "styled-components";

export const MyLinkContact = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  transition: 0.1s linear;
  margin-right: 25px;

  &:hover {
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
    transform: scale(1.1);
  }
`;
