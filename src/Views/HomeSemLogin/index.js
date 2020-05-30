import React, { useEffect } from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import ImagemHome from "../../Images/imagem_home.png";
import { useStyles } from "./styles";
import { useHistory } from "react-router-dom";

export default function HomeSemLogin() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        <Grid container item xs={8} style={{ minWidth: "400px" }}>
          <Typography variant="h2" style={{ color: "white" }}>
            Bem vindo ao BMG!
          </Typography>
          <Typography variant="h3" style={{ color: "white" }}>
            Vantagem exclusivas, premiações, cashback, divulgue um produto e
            ganhe, faça aquisições de novos produtos e compartilhe com seus
            amigos !
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
          Acessar Meu BMG
        </Button>
      </Grid>
    </div>
  );
}
