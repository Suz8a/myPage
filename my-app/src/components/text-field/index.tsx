import React from "react";
import { Text, TextContainer } from "./styled";

type TextFieldProps = {
  text: string;
  className?: string;
};

function TextField({ text, className }: TextFieldProps) {
  return (
    <TextContainer className={className}>
      <Text>{text}</Text>
    </TextContainer>
  );
}

export default TextField;
