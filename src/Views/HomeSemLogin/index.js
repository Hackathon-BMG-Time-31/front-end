import React, { useEffect } from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import ImagemHome from "../../Images/imagem_home.png";
import { useStyles } from "./styles";
import { useHistory } from "react-router-dom";
import { isAuthenticated } from "../../Auth/Auth";

export default function HomeSemLogin() {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated()) {
      history.push("/dashboard");
    }
  });

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        <Grid container item xs={8} style={{ minWidth: "400px" }}>
          <Typography variant="h2" style={{ color: "white" }}>
            Bem vindo ao BMG!
          </Typography>
          <Typography variant="h4" style={{ color: "white" }}>
            Trilhar o seu caminho em busca do sucesso envolve uma série de ações
            no "Jogo da Vida". Com o Be My Guest você convida pessoas ao mesmo
            tempo que compartilha suas experiências em troca de recompensas por
            ajudá-los a também organizar suas vidas financeiras.
          </Typography>
        </Grid>
        <Grid container item xs={4} style={{ minWidth: "400px" }}>
          <img src={ImagemHome} alt="Imagem Home" width="100%" />
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center">
        <Button
          variant="contained"
          style={{ fontSize: "30px" }}
          color="primary"
          onClick={() => history.push("/login")}
        >
          Acessar BMG
        </Button>
      </Grid>
    </div>
  );
}
