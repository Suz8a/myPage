import { styled } from '@mui/system';

export const ContactSectionGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  width: '100%',
  height: '100%',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(5, 1fr)',
  gridTemplateAreas: `
    "top top top top"
    "personalInfo personalInfo profileImage profileImage"
    "personalInfo personalInfo profileImage profileImage"
    "personalInfo personalInfo profileImage profileImage"
    "bottom bottom bottom bottom"
  `,
  transition: 'all 0.2s linear',
  [theme.breakpoints.down(1220)]: {
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'repeat(6, 1fr)',
    gridTemplateAreas: `
      "profileImage"
      "profileImage"
      "personalInfo"
      "personalInfo"
      "personalInfo"
      "bottom"
    `,
    gridGap: '40px',
  },
}));
