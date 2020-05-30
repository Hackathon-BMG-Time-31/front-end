import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { useHistory } from "react-router-dom";

export default function Header() {
  const classes = useStyles();
  const history = useHistory();

  const Theme = createMuiTheme({
    palette: {
      primary: {
        main: "#ffffff",
      },
      secondary: {
        main: "#f6891b",
      },
    },
    overrides: {
      MuiButton: {
        label: {
          color: "white",
        },
      },
    },
  });

  return (
    <MuiThemeProvider theme={Theme}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              BMG Rewards
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => history.push("/cadastro")}
            >
              Abra sua conta
            </Button>
            <Button
              style={{ marginLeft: "10px" }}
              variant="contained"
              color="secondary"
              onClick={() => history.push("/login")}
            >
              Acessar Meu BMG
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </MuiThemeProvider>
  );
}
