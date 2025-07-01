import React, { useId } from 'react';
import { Stack } from '@mui/material';
import { TextContainer } from './styled';

type TextFieldProps = {
  label: string;
  placeholder: string;
  className?: string;
  type?: string;
  value?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function TextField({
  label,
  placeholder,
  className,
  type,
  value,
  required,
  onChange,
}: TextFieldProps) {
  const inputId = useId();

  return (
    <Stack spacing={1}>
      <label htmlFor={inputId}>{`${label}${required ? ' *' : ''}`}</label>
      <TextContainer
        id={inputId}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type={type}
      />
    </Stack>
  );
}

export default TextField;
