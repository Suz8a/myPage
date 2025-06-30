import { styled } from '@mui/system';
import { workExperienceColor } from '../../theme';

type EventProps = {
  moveToBottom?: boolean;
  showSquarePoint?: boolean;
};

export const Label = styled('div')({
  width: '100%',
  height: 0,
  borderTop: `50px solid ${workExperienceColor}`,
  borderRight: '50px solid transparent',
});

export const LabelTitle = styled('div')({
  width: '100%',
  textAlign: 'left',
  position: 'absolute',
  top: 15,
  left: 20,
  fontSize: 20,
  color: '#ffffff',
  fontWeight: 600,
});

export const LabelContainer = styled('div')(({ theme }) => ({
  width: 220,
  position: 'relative',
  [theme.breakpoints.down(400)]: {
    width: 160,
  },
}));

export const EventContainer = styled('div', {
  shouldForwardProp: (prop) => prop !== 'moveToBottom',
})<EventProps>(({ theme, moveToBottom }) => ({
  width: 360,
  height: 350,
  position: 'relative',
  [theme.breakpoints.up(1400)]: {
    ...(moveToBottom ? { marginTop: 'auto' } : { paddingTop: 15 }),
  },
  [theme.breakpoints.down(1400)]: {
    width: 360,
    height: 400,
    margin: '15px 0',
  },
  [theme.breakpoints.down(400)]: {
    width: '90%',
    height: 400,
    margin: '15px 0',
  },
}));

export const Title = styled('div')(({ theme }) => ({
  width: 300,
  height: 35,
  textAlign: 'left',
  color: '#000000',
  fontSize: 25,
  margin: '10px 0 10px 0',
  fontWeight: 500,
  [theme.breakpoints.down(880)]: {
    width: '100%',
    height: 'fit-content',
  },
}));

export const Description = styled('div')({
  width: '100%',
  height: '100%',
  color: '#545454',
  fontSize: 20,
});

export const InfoContainer = styled('div')({
  width: '85%',
  height: '100%',
  display: 'flex',
  marginLeft: 'auto',
  flexDirection: 'column',
});

export const SquarePoint = styled('div', {
  shouldForwardProp: (prop) =>
    prop !== 'moveToBottom' && prop !== 'showSquarePoint',
})<EventProps>(({ theme, moveToBottom, showSquarePoint }) => ({
  width: 65,
  height: 65,
  backgroundColor: workExperienceColor,
  borderRadius: 25,
  position: 'absolute',
  left: 0,
  [theme.breakpoints.up(1400)]: {
    ...(moveToBottom ? { top: 0 } : { bottom: 0 }),
  },
  [theme.breakpoints.down(1400)]: {
    bottom: 0,
    width: 40,
    height: 40,
    borderRadius: 10,
    left: 10,
    ...(showSquarePoint === false ? { display: 'none' } : {}),
  },
}));

export const LineTextContainer = styled('div', {
  shouldForwardProp: (prop) => prop !== 'moveToBottom',
})<EventProps>(({ theme, moveToBottom }) => ({
  width: '100%',
  height: '70%',
  display: 'flex',
  [theme.breakpoints.up(1400)]: {
    ...(moveToBottom ? { position: 'absolute', bottom: 0 } : { top: 0 }),
  },
  [theme.breakpoints.down(1400)]: {
    top: 0,
    height: '80%',
  },
}));

export const LineContainer = styled('div')({
  height: '100%',
  width: '20%',
});
