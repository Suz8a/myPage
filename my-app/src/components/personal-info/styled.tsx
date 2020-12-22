import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const Divider = styled.div`
  background-color: black;
  width: 100%;
  height: 4px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-right: 30px;
  gap: 70px;
  grid-area: personalInfo;
`;
export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LinksContainer = styled.div`
  width: 100%;
`;

export const MainButton = styled(Button)`
  width: 100%;
  height: 100px;
  border-radius: 20px;
  text-transform: none;
`;
