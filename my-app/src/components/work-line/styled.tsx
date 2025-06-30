import { styled } from '@mui/system';
import { workExperienceColor } from '../../theme';

export const Line = styled('div')({
  width: '100%',
  height: 3,
  backgroundColor: workExperienceColor,
  position: 'absolute',
  top: '40%',
});

export const Point = styled('div')({
  width: 20,
  height: 20,
  backgroundColor: workExperienceColor,
  borderRadius: '50%',
  position: 'absolute',
  right: 0,
});

export const LinePointContainer = styled('div')({
  width: '100%',
  position: 'relative',
  height: 20,
});
