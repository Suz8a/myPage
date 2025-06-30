import { styled } from '@mui/system';

// TODO: Migrate to MUI v7 styling system
type LabelProps = {
  text: string;
};

const circleResponsiveSize = {
  width: '200px',
  height: '200px',
  '@media (max-width:1220px)': {
    width: '170px',
    height: '170px',
  },
  '@media (max-width:920px)': {
    width: '150px',
    height: '150px',
  },
  '@media (max-width:630px)': {
    width: '130px',
    height: '130px',
  },
  '@media (max-width:560px)': {
    width: '110px',
    height: '110px',
  },
};

export const Circle = styled('img')(({ theme }) => ({
  ...circleResponsiveSize,
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
  ...circleResponsiveSize,
  borderRadius: '50%',
  backgroundColor: 'rgb(0, 0, 0)',
  margin: '30px',
  position: 'relative',
  transition: '0.35s',
  '@media (max-width:920px)': {
    margin: '20px',
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
