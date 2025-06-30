import { styled } from '@mui/system';
import { Button } from '@mui/material';

export const Divider = styled('div')(({ theme }) => ({
  backgroundColor: 'black',
  width: '100%',
  height: 4,
  margin: '15px 0',
  [theme.breakpoints.down(560)]: {
    height: 2,
  },
}));

export const InfoContainer = styled('div')(({ theme }) => ({
  gridArea: 'personalInfo',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'repeat(3, 1fr)',
  gridTemplateAreas: `
    'name-job'
    'contact-link'
    'button'
  `,
  [theme.breakpoints.down(1220)]: {
    textAlign: 'center',
  },
}));

export const TextContainer = styled('div')({
  gridArea: 'name-job',
  width: '100%',
  marginBottom: 'auto',
});

export const Name = styled('div')(({ theme }) => ({
  fontSize: 60,
  fontWeight: 500,
  [theme.breakpoints.down(560)]: {
    fontSize: 35,
  },
}));

export const Job = styled('div')(({ theme }) => ({
  fontSize: 35,
  fontWeight: 300,
  [theme.breakpoints.down(560)]: {
    fontSize: 25,
  },
}));

export const ButtonText = styled('div')(({ theme }) => ({
  fontSize: 60,
  fontWeight: 500,
  [theme.breakpoints.down(1220)]: {
    fontSize: 30,
  },
}));

export const LinksContainer = styled('div')(({ theme }) => ({
  gridArea: 'contact-link',
  width: '100%',
  display: 'flex',
  [theme.breakpoints.up(1221)]: {
    marginTop: 'auto',
  },
  [theme.breakpoints.down(1220)]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
  },
}));

export const MainButton = styled(Button)(({ theme }) => ({
  gridArea: 'button',
  width: '100%',
  height: 100,
  borderRadius: 20,
  textTransform: 'none',
  marginTop: 'auto',
  [theme.breakpoints.down(560)]: {
    marginTop: 40,
  },
  [`@media (max-height:960px) and (min-width:1220px)`]: {
    height: 90,
  },
  [theme.breakpoints.down(1220)]: {
    borderRadius: 50,
    height: 60,
  },
}));
