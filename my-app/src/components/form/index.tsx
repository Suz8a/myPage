import React from "react";
import {
  FormContainer,
  StyledTextField,
  StyledBigTextField,
  MainButton,
} from "./styled";
import { Typography } from "@material-ui/core";
import { useState } from "react";

type FormProps = {
  onClick: () => void;
};

function Form({ onClick }: FormProps) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  function handleLastName(e: React.ChangeEvent<HTMLInputElement>) {
    setLastName(e.target.value);
  }
  function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }
  function handleMessage(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setMessage(e.target.value);
  }

  return (
    <FormContainer>
      <StyledTextField placeholder="First Name" onChange={handleName} />
      <StyledTextField placeholder="Last Name" onChange={handleLastName} />
      <StyledTextField
        type="email"
        placeholder="What's your email"
        onChange={handleEmail}
      />
      <StyledBigTextField
        placeholder="Your message..."
        onChange={handleMessage}
      />
      <MainButton onClick={onClick} variant="contained" color="primary">
        <Typography variant="h3">Send Message</Typography>
      </MainButton>
    </FormContainer>
  );
}

export default Form;
