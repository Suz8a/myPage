import { styled } from '@mui/material/styles';

export const ContactInfoContainer = styled('div')(({ theme }) => ({
  width: '85%',
  height: '70vh',
  minHeight: 630,
  boxSizing: 'border-box',
  [theme.breakpoints.up(1220)]: {
    height: 750,
    maxWidth: 1280,
  },
  [theme.breakpoints.down(1220)]: {
    height: '90vh',
    width: '70%',
  },
}));
