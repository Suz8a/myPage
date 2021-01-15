import React from "react";
import { TextContainer } from "./styled";

type TextFieldProps = {
  placeholder: string;
  className?: string;
};

function TextField({ placeholder, className }: TextFieldProps) {
  return <TextContainer className={className} placeholder={placeholder} />;
}

export default TextField;
