import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {
  CardContent,
  Card,
  Grid,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { isAuthenticated } from "../../Auth/Auth";
import { useHistory } from "react-router-dom";
import { getUserApi } from "../../Actions";
import ImagemChart from "../../Images/icones/chart.png";
import ImagemComissao from "../../Images/icones/saco.png";
import ImagemPontos from "../../Images/icones/rank.png";
import ImagemFAQ from "../../Images/icones/faq.png";
import ImagemSeta from "../../Images/icones/seta.png";
import ImagemMoney from "../../Images/icones/money.png";
import CurrencyFormat from "react-currency-format";

export default function Dashboard() {
  const classes = useStyles();
  const history = useHistory();
  const [usuario, setUsuario] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function loadUser() {
      getUserApi().then((user) => {
        console.log("user => ", user);
        setUsuario(user);
      });
    }

    if (!isAuthenticated()) {
      history.push("/home");
    } else {
      if (!usuario) {
        loadUser();
      }
    }
  });

  const modal = (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Usuários convidados</DialogTitle>
      <DialogContent>
        {usuario && usuario.invites.length > 0 ? (
          usuario.invites.map((x) => {
            return (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>{x.nome}</p>
                <p>
                  <CurrencyFormat
                    value={x.valor_recebido}
                    displayType={"text"}
                    decimalSeparator=","
                    thousandSeparator={"."}
                    prefix={"R$ "}
                  />
                </p>
              </div>
            );
          })
        ) : (
          <p>Nenhum usuário aceitou seu convite ainda :(</p>
        )}
      </DialogContent>
      <DialogActions>
      <Button
          onClick={() => navigator.clipboard.writeText("Hey, crie uma conta no banco BMG :) http://localhost:3000/cadastro?refer="+(usuario && usuario.id))}
          color="primary"
          variant="contained"
        >
          Copiar link
        </Button>
        <Button
          onClick={() => setOpen(false)}
          color="secondary"
          variant="contained"
        >
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <>
      {modal}
      <div className={classes.root}>
        <>
          <Grid container spacing={3} justify="center">
            <Card style={{ textAlign: "center" }}>
              <CardContent>
                <AccountCircleIcon style={{ fontSize: "100px" }} />
                <p>Maria Doe</p>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            container
            spacing={3}
            justify="center"
            style={{ marginTop: "50px" }}
          >
            <Grid container item xs={4}>
              <Card style={{ width: "100%", height: "150px" }}>
                <CardContent>
                  <Typography variant="h5">Saldo total</Typography>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "20px",
                    }}
                  >
                    <Typography variant="h4">
                      {usuario && (
                        <CurrencyFormat
                          value={usuario.saldo}
                          displayType={"text"}
                          decimalSeparator=","
                          thousandSeparator={"."}
                          prefix={"R$ "}
                        />
                      )}
                    </Typography>
                    <img src={ImagemChart} alt="chart" />
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid container item xs={4}>
              <Card style={{ width: "100%", height: "150px" }}>
                <CardContent>
                  <Typography variant="h5">Produtos</Typography>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "20px",
                    }}
                  >
                    <Typography variant="h6">
                      Clique aqui para acessar nossos produtos! :(
                    </Typography>
                    <img src={ImagemComissao} alt="saco" />
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid container item xs={4}>
              <Card style={{ width: "100%", height: "150px" }}>
                <CardContent
                  onClick={() => setOpen(true)}
                  style={{ cursor: "pointer" }}
                >
                  <Typography variant="h5">Comissão</Typography>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "20px",
                    }}
                  >
                    <Typography variant="h4">
                      {usuario && (
                        <CurrencyFormat
                          value={
                            usuario.invites.length > 0
                              ? usuario.invites
                                  .map((x) => x.valor_recebido)
                                  .reduce((a, b) => a + b)
                              : 0
                          }
                          displayType={"text"}
                          decimalSeparator=","
                          thousandSeparator={"."}
                          prefix={"R$ "}
                        />
                      )}
                    </Typography>
                    <img src={ImagemMoney} alt="saco" width="60px" />
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={3}
            justify="center"
            style={{ marginTop: "50px" }}
          >
            <Grid container item xs={4}>
              <Card style={{ width: "100%", height: "150px" }}>
                <CardContent>
                  <Typography variant="h5">Pontos</Typography>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "20px",
                    }}
                  >
                    <Typography variant="h4">
                      {usuario && usuario.pontos}
                    </Typography>
                    <img src={ImagemPontos} alt="pontos" width="60px" />
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid container item xs={4}>
              <Card style={{ width: "100%", height: "150px" }}>
                <CardContent>
                  <Typography variant="h5">Metas</Typography>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "20px",
                    }}
                  >
                    <Typography variant="h6">
                      Você ainda não possui metas :(
                    </Typography>
                    <img src={ImagemSeta} alt="saco" />
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid container item xs={4}>
              <Card style={{ width: "100%", height: "150px" }}>
                <CardContent
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    window.open(
                      "https://www.bmginvestdigital.com.br/Contato/Contato",
                      "_blank"
                    )
                  }
                >
                  <Typography variant="h5">Informação</Typography>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "20px",
                    }}
                  >
                    <Typography variant="h5">Contate a equipe BMG</Typography>
                    <img src={ImagemFAQ} alt="saco" />
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </>
      </div>
    </>
  );
}
