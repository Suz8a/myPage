import { styled } from '@mui/system';

export const MyLinkContact = styled('img')(({ theme }) => ({
  width: '90px',
  height: '90px',
  transition: '0.1s linear',
  paddingRight: '20px',

  [theme.breakpoints.down(1220)]: {
    width: '60px',
    height: '60px',
  },

  [theme.breakpoints.down(560)]: {
    width: '55px',
    height: '55px',
  },

  '@media (max-height: 960px) and (min-width: 1220px)': {
    width: '75px',
    height: '75px',
    '&:hover': {
      filter: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))',
      transform: 'scale(1.1)',
    },
  },
}));
