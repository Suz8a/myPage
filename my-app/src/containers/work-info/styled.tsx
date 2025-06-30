import { styled } from '@mui/system';
import MySection from '../../components/section';
import WorkLine from '../../components/work-line';

export const MyStyledSection = styled(MySection)({
  position: 'relative',
  backgroundColor: '#f5f9ff',
});

export const Trapezoid = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '40vw',
  top: 0,
  left: 0,
  borderTop: '100vh solid #ffffff',
  borderRight: '20vw solid transparent',
  [theme.breakpoints.down(1400)]: {
    width: 0,
    borderRight: '100vw solid transparent',
  },
}));

export const StyledWorkLine = styled(WorkLine)(({ theme }) => ({
  position: 'absolute',
  left: 0,
  top: '50%',
  width: '95%',
  [theme.breakpoints.down(1400)]: {
    display: 'none',
  },
}));

export const EventsContainer = styled('div')(({ theme }) => ({
  width: '85%',
  height: 650,
  minHeight: 650,
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.up(1400)]: {
    maxHeight: 750,
    maxWidth: 1280,
  },
  [theme.breakpoints.down(1400)]: {
    flexDirection: 'column',
    alignItems: 'center',
    height: 'fit-content',
    margin: '50px 0 -30px 0',
  },
}));
