import React from "react";
import {
  MyStyledSection,
  Trapezoid,
  TextIconContainer,
  FormTextContainer,
  FormContainer,
  Title,
  Message,
  MailIcon,
} from "./styled";
import Form from "../../components/form";
import mail from "../../assets/mail.png";
import { addMessage } from "../../services/firebase";
import { MessageInfo } from "../../types";

type ContactMeProps = {
  className?: string;
  id?: string;
};

function ContactMe({ className, id }: ContactMeProps) {
  function onClick(message: MessageInfo | boolean) {
    console.log(message);
    addMessage(message);
  }
  return (
    <MyStyledSection className={className} id={id}>
      <Trapezoid />
      <FormTextContainer>
        <TextIconContainer>
          <Title>Contact Me</Title>
          <Message>I will talk to you as soon as posible</Message>
          <MailIcon src={mail} />
        </TextIconContainer>
        <FormContainer>
          <Form onClick={onClick} />
        </FormContainer>
      </FormTextContainer>
    </MyStyledSection>
  );
}

export default ContactMe;
