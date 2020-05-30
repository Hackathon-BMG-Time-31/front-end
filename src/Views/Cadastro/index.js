import React from "react";
import {
  TextField,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
} from "@material-ui/core";
import ImagemCadastro from "../../Images/imagem_cadastro.png";
import { useStyles } from "./styles";
import { useHistory } from "react-router-dom";

export default function Cadastro() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        <Grid container item xs={4} style={{ minWidth: "400px" }}>
          <img src={ImagemCadastro} alt="Imagem Login" width="100%" />
        </Grid>
        <Grid justify="center" container item xs={8}>
          <div>
            <Card className={classes.card}>
              <Typography variant="h4" align="center" className={classes.form}>
                Cadastre-se
              </Typography>
              <CardContent>
                <TextField
                  id="login-nome"
                  type="text"
                  label="Nome Completo"
                  fullWidth={true}
                  className={classes.form}
                />

                <TextField
                  id="login-email"
                  type="email"
                  label="Email"
                  fullWidth={true}
                  className={classes.form}
                />

                <TextField
                  id="login-rg"
                  type="text"
                  label="RG"
                  fullWidth={true}
                  className={classes.form}
                />

                <TextField
                  id="login-senha"
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
                    onClick={() => history.push("/cadastro")}
                  >
                    Cadastrar
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
