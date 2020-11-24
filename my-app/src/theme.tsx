import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    h2: { fontWeight: 500 },
    h4: { fontWeight: "lighter" },
  },
  palette: {
    primary: {
      main: "#78ADBA", // CHANGE THIS TO #477E8A
    },
    secondary: {
      main: "#F5F9FA",
    },
  },
});

export default theme;
