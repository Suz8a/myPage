import { styled } from '@mui/system';
import MySection from '../../components/section';

export const MyStyledSection = styled(MySection)({
  position: 'relative',
});

export const Trapezoid = styled('div')({
  position: 'absolute',
  height: '30vh',
  top: 0,
  left: 0,
  borderRight: '100vw solid #f5f9ff',
  borderBottom: '35vw solid transparent',
});

export const FormContainer = styled('div')(({ theme }) => ({
  width: '40%',
  height: '100%',
  marginLeft: 'auto',
  [theme.breakpoints.down(880)]: {
    width: '100%',
    marginLeft: 0,
  },
}));

export const TextIconContainer = styled('div')(({ theme }) => ({
  width: '40%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  [theme.breakpoints.down(880)]: {
    fontSize: 30,
    width: '100%',
  },
}));

export const Title = styled('div')(({ theme }) => ({
  width: '100%',
  height: 80,
  fontWeight: 500,
  fontSize: 80,
  [theme.breakpoints.down(1200)]: {
    fontSize: 60,
  },
  [theme.breakpoints.down(880)]: {
    fontSize: 40,
    height: 'fit-content',
    marginTop: 5,
  },
}));

export const Message = styled('div')(({ theme }) => ({
  width: '100%',
  height: 40,
  fontSize: 40,
  color: '#1976d2',
  margin: '30px 0',
  [theme.breakpoints.down(880)]: {
    fontSize: 25,
    margin: '10px 0 20px 0',
  },
}));

export const FormTextContainer = styled('div')(({ theme }) => ({
  width: '85%',
  height: '70vh',
  maxWidth: 1280,
  minHeight: 550,
  boxSizing: 'border-box',
  display: 'flex',
  position: 'relative',
  margin: 50,
  [theme.breakpoints.up(1400)]: {
    maxHeight: 550,
  },
  [theme.breakpoints.down(1400)]: {
    fontSize: 40,
  },
  [theme.breakpoints.down(880)]: {
    flexDirection: 'column',
    width: '90%',
    height: '100vh',
    padding: '10px 0',
    margin: 0,
  },
}));

export const MailIcon = styled('img')(({ theme }) => ({
  width: '100%',
  height: 300,
  marginTop: 'auto',
  [theme.breakpoints.down(1220)]: {
    height: 250,
  },
  [theme.breakpoints.down(880)]: {
    width: 120,
    height: 80,
    margin: '10px 0',
  },
}));
