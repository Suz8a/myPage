import { styled } from '@mui/system';
import MySection from '../../components/section';

export const SkillInfoContainer = styled('div')({
  width: '100vw',
  height: '70vh',
  maxWidth: 1470,
  minHeight: 630,
  boxSizing: 'border-box',
  display: 'flex',
  flexWrap: 'wrap',
  margin: '0 auto auto auto',
  justifyContent: 'center',
  alignItems: 'center',
  overflowY: 'scroll',
});

export const MyStyledSection = styled(MySection)({
  backgroundColor: '#f5f9ff',
});
