import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { CardContent, Card, Grid, Typography } from "@material-ui/core";
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

  return (
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
              <CardContent>
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
                        value={usuario.comissao}
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
              <CardContent>
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
  );
}
