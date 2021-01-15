import styled from "styled-components";
import TextField from "../../components/text-field";
import Button from "@material-ui/core/Button";

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const StyledBigTextField = styled(TextField)`
  height: 200px;
  margin-bottom: 25px;
`;

export const StyledTextField = styled(TextField)`
  margin-bottom: 30px;
`;

export const MainButton = styled(Button)`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  text-transform: none;
  margin-top: auto;
  position: relative;
`;
