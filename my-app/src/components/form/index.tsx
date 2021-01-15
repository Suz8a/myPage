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
      <StyledTextField placeholder="First Name" />
      <StyledTextField placeholder="Last Name" />
      <StyledTextField placeholder="What's your email" />
      <StyledBigTextField placeholder="Your message..." />
      <MainButton variant="contained" color="primary">
        <Typography variant="h3">Send Message</Typography>
      </MainButton>
    </FormContainer>
  );
}

export default Form;
