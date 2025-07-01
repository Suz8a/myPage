import { styled } from '@mui/system';

type LabelProps = {
  text: string;
};

export const Circle = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  boxShadow: '0px 0px 10px #a8a8a8',
  position: 'absolute',
  transition: '0.35s',
  opacity: 1,
  [theme.breakpoints.up(1221)]: {
    '&:hover': {
      opacity: 0.2,
    },
  },
}));

export const CircleLabel = styled('div')(({ theme }) => ({
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  margin: '30px',
  position: 'relative',
  transition: '0.35s',
  '&:hover': {
    backgroundColor: 'rgb(0, 0, 0)',
  },
  [theme.breakpoints.down(1220)]: {
    width: '170px',
    height: '170px',
  },
  [theme.breakpoints.down(920)]: {
    width: '150px',
    height: '150px',
  },
  [theme.breakpoints.down(630)]: {
    width: '130px',
    height: '130px',
  },
  [theme.breakpoints.down(560)]: {
    width: '110px',
    height: '110px',
  },
}));

export const Label = styled('div', {
  shouldForwardProp: (prop) => prop !== 'text',
})<LabelProps>(({ text }) => ({
  width: '100%',
  position: 'absolute',
  top: text.length > 10 ? '35%' : '45%',
  color: '#ffffff',
  textAlign: 'center',
  fontWeight: 900,
  fontSize: '25px',
  userSelect: 'none',
  '@media (max-width:1220px)': {
    color: 'transparent',
  },
}));
