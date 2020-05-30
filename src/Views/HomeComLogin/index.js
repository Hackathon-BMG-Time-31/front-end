import React from "react";
import { useStyles } from "./styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { CardContent, Card, Grid } from "@material-ui/core";

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
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
          <Card style={{ width: "100%", height: "250px" }}>
            <CardContent>Saldo total</CardContent>
          </Card>
        </Grid>
        <Grid container item xs={4}>
          <Card style={{ width: "100%", height: "250px" }}>
            <CardContent>Saldo total</CardContent>
          </Card>
        </Grid>
        <Grid container item xs={4}>
          <Card style={{ width: "100%", height: "250px" }}>
            <CardContent>Saldo total</CardContent>
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
          <Card style={{ width: "100%", height: "250px" }}>
            <CardContent>Saldo total</CardContent>
          </Card>
        </Grid>
        <Grid container item xs={4}>
          <Card style={{ width: "100%", height: "250px" }}>
            <CardContent>Saldo total</CardContent>
          </Card>
        </Grid>
        <Grid container item xs={4}>
          <Card style={{ width: "100%", height: "250px" }}>
            <CardContent>Saldo total</CardContent>
          </Card>
        </Grid>
      </Grid>

    </div>
  );
}
