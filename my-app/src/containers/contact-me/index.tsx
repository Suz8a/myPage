import React from "react";
import {
  MyStyledSection,
  Trapezoid,
  TextIconContainer,
  FormTextContainer,
  FormContainer,
} from "./styled";
import Form from "../../components/form";

type ContactMeProps = {
  className?: string;
  id?: string;
};

function ContactMe({ className, id }: ContactMeProps) {
  return (
    <MyStyledSection className={className} id={id}>
      <Trapezoid />
      <FormTextContainer>
        <TextIconContainer></TextIconContainer>
        <FormContainer>
          <Form />
        </FormContainer>
      </FormTextContainer>
    </MyStyledSection>
  );
}

export default ContactMe;
