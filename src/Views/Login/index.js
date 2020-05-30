import React from "react";
import {
  TextField,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
} from "@material-ui/core";
import ImagemLogin from "../../Images/imagem_login.png";
import { useStyles } from "./styles";
import { useHistory } from "react-router-dom";

export default function Login() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        <Grid container item xs={4} style={{ minWidth: "400px" }}>
          <img src={ImagemLogin} alt="Imagem Login" width="100%" />
        </Grid>
        <Grid justify="center" container item xs={8}>
          <div>
            <Card className={classes.card}>
              <Typography variant="h4" align="center" className={classes.form}>
                Login
              </Typography>
              <CardContent>
                <TextField
                  id="login-email"
                  type="email"
                  label="Email"
                  fullWidth={true}
                  className={classes.form}
                />
                <TextField
                  id="login-email"
                  type="password"
                  label="Senha"
                  fullWidth={true}
                  className={classes.form}
                />

                <div className={classes.actions}>
                  <Button
                    color="primary"
                    variant="contained"
                    className={classes.button}
                  >
                    Entrar
                  </Button>
                  <Button
                    color="secondary"
                    variant="contained"
                    className={classes.button}
                    onClick={() => history.push("/cadastro")}
                  >
                    Cadastro
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
