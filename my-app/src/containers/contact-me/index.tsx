import React from "react";
import {
  MyStyledSection,
  Trapezoid,
  TextIconContainer,
  FormTextContainer,
} from "./styled";
import Form from "../../components/form";
import { FormContainer } from "../../components/form/styled";

function ContactMe() {
  return (
    <MyStyledSection>
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
