import { createMuiTheme } from "@material-ui/core/styles";

export const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f6891b",
    },
    secondary: {
      main: "#FFDF4F",
    },
  },
  overrides: {
    MuiButton:{
      label: {
        color: "white"
      }
    }
  },
});
