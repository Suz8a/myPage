import React, { useState } from 'react';
import {
  MyStyledSection,
  Trapezoid,
  TextIconContainer,
  FormTextContainer,
  FormContainer,
  Title,
  Message,
  MailIcon,
} from './styled';
import Form from '../../components/form';
import mail from '../../assets/mail.png';
import { addMessage } from '../../services/firebase';
import { MessageInfo } from '../../types';
import { Snackbar, Alert as MuiAlert, AlertProps } from '@mui/material';

type AlertMessageColor = NonNullable<AlertProps['color']>;

const ALERT_MESSAGE: Record<AlertMessageColor, string> = {
  success: 'Message saved',
  error: 'Error saving message',
  warning: 'Please check your information',
  info: '', // Not used, but included for completeness
};

interface ContactMeProps {
  className?: string;
  id?: string;
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function ContactMe({ className, id }: ContactMeProps) {
  const [open, setOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] =
    useState<AlertMessageColor>('success');

  const handleClose = (_: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  const showSuccessMessage = () => {
    setAlertSeverity('success');
    setOpen(true);
  };
  const showErrorMessage = () => {
    setAlertSeverity('error');
    setOpen(true);
  };
  const showIncompleteInfoMessage = () => {
    setAlertSeverity('warning');
    setOpen(true);
  };

  function onClick(message: MessageInfo | boolean) {
    addMessage(
      message,
      showIncompleteInfoMessage,
      showSuccessMessage,
      showErrorMessage
    );
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
      <Snackbar open={open} autoHideDuration={6000} onClick={handleClose}>
        <Alert onClose={handleClose} severity={alertSeverity}>
          {ALERT_MESSAGE[alertSeverity]}
        </Alert>
      </Snackbar>
    </MyStyledSection>
  );
}

export default ContactMe;
