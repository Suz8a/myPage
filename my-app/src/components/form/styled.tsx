import styled from "styled-components";
import TextField from "../../components/text-field";
import Button from "@material-ui/core/Button";

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const StyledBigTextField = styled(TextField)`
  height: 180px;
  margin-bottom: 30px;
`;

export const StyledTextField = styled(TextField)`
  margin-bottom: 30px;
`;

export const MainButton = styled(Button)`
  width: 100%;
  height: 90px;
  border-radius: 10px;
  text-transform: none;
  margin-top: auto;
`;
