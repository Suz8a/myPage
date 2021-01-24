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

type ContactMeProps = {
  className?: string;
  id?: string;
};

function ContactMe({ className, id }: ContactMeProps) {
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
          <Form
            onClick={() => {
              alert("no");
            }}
          />
        </FormContainer>
      </FormTextContainer>
    </MyStyledSection>
  );
}

export default ContactMe;
