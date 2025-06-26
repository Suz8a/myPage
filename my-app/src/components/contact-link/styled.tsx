import styled from 'styled-components';

export const MyLinkContact = styled.img`
  width: 90px;
  height: 90px;
  transition: 0.1s linear;
  padding-right: 20px;

  @media (max-width: 1220px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 560px) {
    width: 55px;
    height: 55px;
  }

  @media (max-height: 960px) and (min-width: 1220px) {
    width: 75px;
    height: 75px;
    &:hover {
      filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
      transform: scale(1.1);
    }
  }
`;
