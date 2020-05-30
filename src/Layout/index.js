import React from "react";
import Header from "./Header";
import { Theme } from "./Theme";
import { Container, MuiThemeProvider } from "@material-ui/core";

export default function LayoutSemLogin(props) {
  const { children } = props;

  return (
    <MuiThemeProvider theme={Theme}>
      <Header />

      <Container>{children && children}</Container>
    </MuiThemeProvider>
  );
}
