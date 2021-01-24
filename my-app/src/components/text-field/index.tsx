import React from "react";
import { TextContainer } from "./styled";

type TextFieldProps = {
  placeholder: string;
  className?: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function TextField({ placeholder, className, type, onChange }: TextFieldProps) {
  return (
    <TextContainer
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
    />
  );
}

export default TextField;
