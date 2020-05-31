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
import ImagemCadastro from "../../Images/imagem_cadastro.png";
import { useStyles } from "./styles";
import { useHistory } from "react-router-dom";
import { isAuthenticated } from "../../Auth/Auth";
import { cadastrarApi } from "../../Actions";
import queryString from "query-string";
import MuiAlert from "@material-ui/lab/Alert";

export default function Cadastro(props) {
  const classes = useStyles();
  const history = useHistory();

  const params = queryString.parse(props.location.search);

  const { refer } = params;

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [rg, setRg] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("error");
  const [mensagem, setMensagem] = useState("error");

  useEffect(() => {
    if (isAuthenticated()) {
      history.push("/dashboard");
    }
  });

  async function cadastrar() {
    const usuario = {
      nome: nome,
      email: email,
      senha: senha,
      rg: rg,
      cpf: cpf,
      refer: refer,
    };

    const resultado = await cadastrarApi(usuario);

    setSeverity(resultado ? "success" : "error");
    setMensagem(
      resultado
        ? "Usuário cadastrado com sucesso!"
        : "Ocorreu um erro ao cadatrar o usuário"
    );
    setOpen(true);
  }

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
          severity={severity}
        >
          {mensagem}
        </MuiAlert>
      </Snackbar>
      <div className={classes.root}>
        <Grid container spacing={3} justify="center">
          <Grid container item xs={4} style={{ minWidth: "400px" }}>
            <img src={ImagemCadastro} alt="Imagem Login" width="100%" />
          </Grid>
          <Grid justify="center" container item xs={8}>
            <div>
              <Card className={classes.card}>
                <Typography
                  variant="h4"
                  align="center"
                  className={classes.form}
                >
                  Cadastre-se
                </Typography>
                <CardContent>
                  <TextField
                    id="login-nome"
                    type="text"
                    label="Nome Completo"
                    fullWidth={true}
                    className={classes.form}
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    onKeyPress={async (e) => {
                      if (e.key === "Enter") {
                        await cadastrar();
                      }
                    }}
                  />

                  <TextField
                    id="login-cpf"
                    type="text"
                    label="CPF"
                    fullWidth={true}
                    className={classes.form}
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    onKeyPress={async (e) => {
                      if (e.key === "Enter") {
                        await cadastrar();
                      }
                    }}
                  />

                  <TextField
                    id="login-email"
                    type="email"
                    label="Email"
                    fullWidth={true}
                    className={classes.form}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={async (e) => {
                      if (e.key === "Enter") {
                        await cadastrar();
                      }
                    }}
                  />

                  <TextField
                    id="login-rg"
                    type="text"
                    label="RG"
                    fullWidth={true}
                    className={classes.form}
                    value={rg}
                    onChange={(e) => setRg(e.target.value)}
                    onKeyPress={async (e) => {
                      if (e.key === "Enter") {
                        await cadastrar();
                      }
                    }}
                  />

                  <TextField
                    id="login-senha"
                    type="password"
                    label="Senha"
                    fullWidth={true}
                    className={classes.form}
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    onKeyPress={async (e) => {
                      if (e.key === "Enter") {
                        await cadastrar();
                      }
                    }}
                  />

                  <div className={classes.actions}>
                    <Button
                      color="primary"
                      variant="contained"
                      className={classes.button}
                      onClick={async () => await cadastrar()}
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
    </>
  );
}
