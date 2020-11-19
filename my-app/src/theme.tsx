import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    h2: { fontWeight: 500 },
    h4: { fontWeight: "lighter" },
  },
  palette: {
    primary: {
      main: "#78ADBA",
    },
    secondary: {
      main: "#F5F9FA",
    },
  },
});

export default theme;
