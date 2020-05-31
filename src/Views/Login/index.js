import React, { useEffect, useState } from "react";
import {
  TextField,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import ImagemLogin from "../../Images/imagem_login.png";
import { useStyles } from "./styles";
import { useHistory } from "react-router-dom";
import { setToken } from "../../Auth/Auth";
import { isAuthenticated } from "../../Auth/Auth";
import { loginApi } from "../../Actions";

export default function Login() {
  const classes = useStyles();
  const history = useHistory();

  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [open, setOpen] = useState(false);

  async function login() {
    const resultLogin = await loginApi(cpf, senha);

    console.log("resultLogin => ", resultLogin);

    if (resultLogin) {
      history.push("/dashboard");
    } else {
      setCpf("");
      setSenha("");
      setOpen(true);
    }
  }

  useEffect(() => {
    if (isAuthenticated()) {
      history.push("/dashboard");
    }
  });

  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3 * 1000}
        onClose={handleCloseSnackBar}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleCloseSnackBar}
          severity="error"
        >
          CPF ou senha incorretos!
        </MuiAlert>
      </Snackbar>
      <div className={classes.root}>
        <Grid container spacing={3} justify="center">
          <Grid container item xs={4} style={{ minWidth: "400px" }}>
            <img src={ImagemLogin} alt="Imagem Login" width="100%" />
          </Grid>
          <Grid justify="center" container item xs={8}>
            <div>
              <Card className={classes.card}>
                <Typography
                  variant="h4"
                  align="center"
                  className={classes.form}
                >
                  Login
                </Typography>
                <CardContent>
                  <TextField
                    id="login-cpf"
                    type="cpf"
                    label="CPF"
                    fullWidth={true}
                    className={classes.form}
                    onChange={(e) => setCpf(e.target.value)}
                    value={cpf}
                    onKeyPress={async (e) => {
                      if (e.key === "Enter") {
                        await login();
                      }
                    }}
                  />
                  <TextField
                    id="login-email"
                    type="password"
                    label="Senha"
                    fullWidth={true}
                    className={classes.form}
                    onChange={(e) => setSenha(e.target.value)}
                    value={senha}
                    onKeyPress={async (e) => {
                      if (e.key === "Enter") {
                        await login();
                      }
                    }}
                  />

                  <div className={classes.actions}>
                    <Button
                      color="primary"
                      variant="contained"
                      className={classes.button}
                      onClick={async () => await login()}
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
    </>
  );
}
