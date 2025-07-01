import { styled } from '@mui/system';
import MySection from '../../components/section';

export const MyStyledSection = styled(MySection)({
  backgroundColor: '#f5f9ff',
});

export const Title = styled('div')(({ theme }) => ({
  width: '100%',
  fontSize: 50,
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
  fontSize: 40,
  color: '#1976d2',
  margin: '30px 0',
  [theme.breakpoints.down(880)]: {
    fontSize: 25,
    margin: '10px 0 20px 0',
  },
}));

export const MailIcon = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
}));
