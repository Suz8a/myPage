import React from "react";
import { TextContainer } from "./styled";

type TextFieldProps = {
  placeholder: string;
  className?: string;
  type?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function TextField({
  placeholder,
  className,
  type,
  value,
  onChange,
}: TextFieldProps) {
  return (
    <TextContainer
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      type={type}
    />
  );
}

export default TextField;
