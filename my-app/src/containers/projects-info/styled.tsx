import { styled } from '@mui/system';
import { Computer, PhoneAndroid } from '@mui/icons-material';
import IconCircle from '../../components/icon-circle';

export const ProjectsContainer = styled('div')(({ theme }) => ({
  width: '85%',
  height: '70vh',
  maxWidth: 1280,
  minHeight: 630,
  boxSizing: 'border-box',
  backgroundColor: '#f5f9ff',
  borderRadius: 20,
  position: 'relative',
  display: 'flex',
  overflow: 'hidden',
  padding: 20,
  [theme.breakpoints.down(1400)]: {
    minHeight: 700,
  },
  [theme.breakpoints.up(1400)]: {
    maxHeight: 750,
  },
  [theme.breakpoints.down(1220)]: {
    flexDirection: 'column',
    padding: '0 0 20px 20px',
  },
  [theme.breakpoints.down(650)]: {
    margin: '60px 0',
  },
}));

export const TopProjectImage = styled('img')(({ theme }) => ({
  width: 450,
  height: 'auto',
  position: 'absolute',
  top: -220,
  left: 30,
  boxShadow: '0px 2px 10px #b3b3b3',
  [theme.breakpoints.down(1400)]: {
    top: -140,
    left: 20,
  },
  [theme.breakpoints.down(1220)]: {
    top: -170,
    width: 350,
    left: 30,
  },
  [theme.breakpoints.down(480)]: {
    top: -115,
    width: 230,
    left: 5,
  },
}));

export const BottomProjectImage = styled('img')(({ theme }) => ({
  width: 600,
  height: 'auto',
  position: 'absolute',
  bottom: -100,
  left: '20%',
  boxShadow: '0px 2px 10px #b3b3b3',
  [theme.breakpoints.down(1400)]: {
    left: '10%',
    bottom: -40,
  },
  [theme.breakpoints.down(1220)]: {
    bottom: -200,
    left: '40%',
  },
}));

export const ProjectsImagesContainer = styled('div')(({ theme }) => ({
  height: '100%',
  width: '70%',
  position: 'relative',
  [theme.breakpoints.down(1220)]: {
    width: '100%',
    height: 900,
    overflow: 'hidden',
  },
  [theme.breakpoints.down(480)]: {
    width: '100%',
    height: 500,
    overflow: 'hidden',
  },
}));

export const TextIconsContainer = styled('div')(({ theme }) => ({
  height: '100%',
  width: '30%',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down(1220)]: {
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
  },
}));

export const CirclesContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: '45%',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down(1220)]: {
    width: 'fit-content',
    margin: '20px -45px 30px 0',
    marginBottom: 15,
  },
}));

export const StyledIconCircle = styled(IconCircle)(({ theme }) => ({
  color: '#000000',
  marginRight: 45,
  [theme.breakpoints.down(1220)]: {
    width: 120,
    height: 120,
  },
  [theme.breakpoints.down(480)]: {
    width: 100,
    height: 100,
  },
}));

export const StyledPhoneIcon = styled(PhoneAndroid)({
  width: 55,
  height: 'auto',
  color: '#3d7394',
});

export const StyledLaptopIcon = styled(Computer)({
  width: 55,
  height: 'auto',
  color: '#3d7394',
});

export const ProjectsTitle = styled('div')(({ theme }) => ({
  width: '100%',
  fontSize: 30,
  fontWeight: 500,
  color: '#000000',
  transition: '0.5s',
  [theme.breakpoints.down(480)]: {
    fontSize: 20,
  },
}));

export const ProjectsLink = styled('a')(({ theme }) => ({
  width: 'fit-content',
  height: 40,
  fontSize: 32,
  color: '#000000',
  fontWeight: 300,
  marginTop: 30,
  textDecoration: 'none',
  borderBottom: '2px solid #000000',
  transition: '0.5s',
  '&:hover': {
    color: 'hsl(0, 0%, 40%)',
    borderBottom: '2px solid hsl(0, 0%, 40%)',
  },
  [theme.breakpoints.down(480)]: {
    fontSize: 25,
    borderBottom: '1px solid #000000',
    marginTop: 20,
  },
}));
