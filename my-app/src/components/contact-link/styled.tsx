import styled from "styled-components";

export const MyLinkContact = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  transition: 0.1s linear;
  margin-right: 30px;

  &:hover {
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
    transform: scale(1.1);
  }

  @media (max-height: 960px) {
    width: 75px;
    height: 75px;
  }
`;
