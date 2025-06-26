import styled from 'styled-components';
import { Button } from '@mui/material';

export const Divider = styled.div`
  background-color: black;
  width: 100%;
  height: 4px;
  margin: 15px 0;
  @media (max-width: 560px) {
    height: 2px;
  }
`;

export const InfoContainer = styled.div`
  grid-area: personalInfo;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    'name-job'
    'contact-link'
    'button';
  @media (max-width: 1220px) {
    text-align: center;
  }
`;
export const TextContainer = styled.div`
  grid-area: name-job;
  width: 100%;
  margin-bottom: auto;
`;

export const Name = styled.div`
  font-size: 60px;
  font-weight: 500;

  @media (max-width: 560px) {
    font-size: 35px;
  }
`;

export const Job = styled.div`
  font-size: 35px;
  font-weight: 'lighter';
  @media (max-width: 560px) {
    font-size: 25px;
  }
`;

export const ButtonText = styled.div`
  font-size: 60px;
  font-weight: 500;
  @media (max-width: 1220px) {
    font-size: 30px;
  }
`;

export const LinksContainer = styled.div`
  grid-area: contact-link;
  width: 100%;
  display: flex;
  @media (min-width: 1221px) {
    margin-top: auto;
  }
  @media (max-width: 1220px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
`;

export const MainButton = styled(Button)`
  grid-area: button;
  width: 100%;
  height: 100px;
  border-radius: 20px;
  text-transform: none;
  margin-top: auto;
  @media (max-width: 560px) {
    margin-top: 40px;
  }
  @media (max-height: 960px) and (min-width: 1220px) {
    height: 90px;
  }
  @media (max-width: 1220px) {
    border-radius: 50px;
    height: 60px;
  }
`;
