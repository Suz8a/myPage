import styled from "styled-components";
import TextField from "../../components/text-field";
import Button from "@material-ui/core/Button";

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const StyledBigTextField = styled(TextField)`
  height: 200px;
  margin-bottom: 25px;
  padding: 15px;
  box-sizing: border-box;
`;

export const StyledTextField = styled(TextField)`
  margin-bottom: 30px;
  padding: 0 15px;
  box-sizing: border-box;
`;

export const MainButton = styled(Button)`
  width: 100%;
  height: 70px;
  border-radius: 10px;
  text-transform: none;
  align-self: flex-end;
`;
