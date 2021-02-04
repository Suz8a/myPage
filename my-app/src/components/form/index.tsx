import React from "react";
import {
  FormContainer,
  StyledTextField,
  StyledBigTextField,
  MainButton,
  ButtonText,
} from "./styled";
import { useState } from "react";
import { MessageInfo } from "../../types";

type FormProps = {
  onClick: (message: MessageInfo | boolean) => void;
};

function Form({ onClick }: FormProps) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //validations
  const [showErrors, setShowErrors] = useState(false);

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

  //validators
  function emptyText(text: string) {
    return text.trim() === "";
  }

  function emailValidation(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email.trim() === "" || !re.test(email.toLowerCase());
  }

  function checkErrors() {
    setShowErrors(
      emptyText(name) ||
        emptyText(lastName) ||
        emailValidation(email) ||
        emptyText(message)
    );
  }

  function getMessageInfo() {
    checkErrors();

    if (
      emptyText(name) ||
      emptyText(lastName) ||
      emailValidation(email) ||
      emptyText(message)
    )
      return true;

    var info = { name, lastName, email, message };
    setName("");
    setLastName("");
    setEmail("");
    setMessage("");
    return info;
  }

  return (
    <FormContainer>
      <StyledTextField
        placeholder="First Name"
        onChange={handleName}
        value={name}
        validation={emptyText(name) && showErrors}
      />
      <StyledTextField
        placeholder="Last Name"
        onChange={handleLastName}
        value={lastName}
        validation={emptyText(lastName) && showErrors}
      />
      <StyledTextField
        type="email"
        placeholder="What's your email"
        onChange={handleEmail}
        value={email}
        validation={emailValidation(email) && showErrors}
      />
      <StyledBigTextField
        placeholder="Your message..."
        onChange={handleMessage}
        value={message}
        validation={emptyText(message) && showErrors}
      />
      <MainButton
        onClick={() => {
          onClick(getMessageInfo());
        }}
        variant="contained"
        color="primary"
      >
        <ButtonText>Send Message</ButtonText>
      </MainButton>
    </FormContainer>
  );
}

export default Form;
