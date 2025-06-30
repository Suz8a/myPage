import { styled, keyframes } from '@mui/system';

const opacityMoving = keyframes`
  0% {
    opacity: 0;
    transform: translate(100px);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;

const opacity = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const MyImage = styled('img')(({ theme }) => ({
  width: 'auto',
  height: '100%',
  borderRadius: '50%',
  margin: 'auto 0 auto auto',
  gridArea: 'profileImage',
  [theme.breakpoints.up(1221)]: {
    animation: `${opacityMoving} 1s forwards`,
  },
  [theme.breakpoints.down(1220)]: {
    animation: `${opacity} 1s forwards`,
    margin: 'auto',
  },
}));
