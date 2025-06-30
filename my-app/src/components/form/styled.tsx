import { styled } from '@mui/system';
import { Button } from '@mui/material';
import TextField from '../../components/text-field';

type ValidationProps = {
  validation: boolean;
};

export const FormContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down(880)]: {
    margin: '10px 0',
  },
}));

export const StyledBigTextField = styled('textarea', {
  shouldForwardProp: (prop) => prop !== 'validation',
})<ValidationProps>(({ validation }) => ({
  height: 200,
  marginBottom: 25,
  padding: 15,
  boxSizing: 'border-box',
  width: '100%',
  borderRadius: 40,
  textAlign: 'left',
  position: 'relative',
  backgroundColor: '#ffffff',
  fontSize: 25,
  fontFamily: 'roboto',
  resize: 'none',
  border: validation ? '1px solid #FF0000' : '1px solid #a3a3a3',
}));

export const StyledTextField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== 'validation',
})<ValidationProps>(({ validation }) => ({
  marginBottom: 30,
  padding: '0 15px',
  boxSizing: 'border-box',
  border: validation ? '1px solid #FF0000' : '1px solid #a3a3a3',
}));

export const MainButton = styled(Button)(({ theme }) => ({
  width: '100%',
  height: 70,
  borderRadius: 10,
  textTransform: 'none',
  alignSelf: 'flex-end',
  [theme.breakpoints.down(880)]: {
    height: 50,
  },
}));

export const ButtonText = styled('div')(({ theme }) => ({
  fontSize: 50,
  fontWeight: 500,
  transition: '0.5s',
  [theme.breakpoints.down(1400)]: {
    fontSize: 40,
  },
  [theme.breakpoints.down(1220)]: {
    fontSize: 30,
  },
}));
