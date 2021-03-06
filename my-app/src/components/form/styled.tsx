import styled from "styled-components";
import TextField from "../../components/text-field";
import Button from "@material-ui/core/Button";

type ValidationProps = {
  validation: boolean;
};

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  @media (max-width: 880px) {
    margin: 10px 0;
  }
`;

export const StyledBigTextField = styled.textarea<ValidationProps>`
  height: 200px;
  margin-bottom: 25px;
  padding: 15px;
  box-sizing: border-box;
  width: 100%;
  border-radius: 40px;

  text-align: left;
  position: relative;
  background-color: #ffffff;
  font-size: 25px;
  font-family: "roboto";
  resize: none;
  ${({ validation }) =>
    validation ? "border: 1px solid #FF0000;" : "border: 1px solid #a3a3a3;"}
`;

export const StyledTextField = styled(TextField)<ValidationProps>`
  margin-bottom: 30px;
  padding: 0 15px;
  box-sizing: border-box;
  ${({ validation }) =>
    validation ? "border: 1px solid #FF0000;" : "border: 1px solid #a3a3a3;"}
`;

export const MainButton = styled(Button)`
  width: 100%;
  height: 70px;
  border-radius: 10px;
  text-transform: none;
  align-self: flex-end;
  @media (max-width: 880px) {
    height: 50px;
  }
`;

export const ButtonText = styled.div`
  font-size: 50px;
  font-weight: 500;
  transition: 0.5s;
  @media (max-width: 1400px) {
    font-size: 40px;
  }
  @media (max-width: 1220px) {
    font-size: 30px;
  }
`;
