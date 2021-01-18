import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    h2: { fontWeight: 500 },
    h4: { fontWeight: "lighter" },
  },
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#F5F9FF",
    },
  },
});

export const workExperienceColor = "#0752BB";

export default theme;
