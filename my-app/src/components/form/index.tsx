import React from "react";
import {
  FormContainer,
  StyledTextField,
  StyledBigTextField,
  MainButton,
} from "./styled";
import { Typography } from "@material-ui/core";
import { useState } from "react";
import { MessageInfo } from "../../types";

type FormProps = {
  onClick: ({ name, lastName, email, message }: MessageInfo) => void;
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

  function getMessageInfo() {
    return {
      name,
      lastName,
      email,
      message,
    };
  }

  return (
    <FormContainer>
      <StyledTextField
        placeholder="First Name"
        onChange={handleName}
        value={name}
      />
      <StyledTextField
        placeholder="Last Name"
        onChange={handleLastName}
        value={lastName}
      />
      <StyledTextField
        type="email"
        placeholder="What's your email"
        onChange={handleEmail}
        value={email}
      />
      <StyledBigTextField
        placeholder="Your message..."
        onChange={handleMessage}
        value={message}
      />
      <MainButton
        onClick={() => {
          onClick(getMessageInfo());
        }}
        variant="contained"
        color="primary"
      >
        <Typography variant="h3">Send Message</Typography>
      </MainButton>
    </FormContainer>
  );
}

export default Form;
