import { styled } from '@mui/system';
import { Button } from '@mui/material';
import TextField from '../../components/text-field';

type ValidationProps = {
  validation: boolean;
};

export const StyledBigTextField = styled('textarea', {
  shouldForwardProp: (prop) => prop !== 'validation',
})<ValidationProps>(({ validation }) => ({
  height: 200,
  marginBottom: 25,
  padding: 15,
  boxSizing: 'border-box',
  width: '100%',
  borderRadius: 15,
  textAlign: 'left',
  position: 'relative',
  backgroundColor: '#ffffff',
  fontSize: 20,
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
  borderRadius: 35,
  textTransform: 'none',
  alignSelf: 'flex-end',
  fontSize: 25,
  [theme.breakpoints.down(880)]: {
    height: 50,
  },
}));
