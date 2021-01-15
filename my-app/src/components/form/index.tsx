import React from "react";
import {
  FormContainer,
  StyledTextField,
  StyledBigTextField,
  MainButton,
} from "./styled";
import { Typography } from "@material-ui/core";

function Form() {
  return (
    <FormContainer>
      <StyledTextField text="First Name" />
      <StyledTextField text="Last Name" />
      <StyledTextField text="What's your email" />
      <StyledBigTextField text="Your message..." />
      <MainButton variant="contained" color="primary">
        <Typography variant="h3">holiwis</Typography>
      </MainButton>
    </FormContainer>
  );
}

export default Form;
