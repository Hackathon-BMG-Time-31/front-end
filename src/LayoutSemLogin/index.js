import React from "react";
import Header from "./Header";
import { Theme }  from "./Theme";
import { Container, MuiThemeProvider } from "@material-ui/core";

export default function LayoutSemLogin(props) {
  const { children } = props;

  return (
    <body style={{backgroundImage: "linear-gradient(#e08a01, #f4bd7f)"}}>
        <MuiThemeProvider theme={Theme}>
      <Header />

      <Container>{children && children}</Container>
    </MuiThemeProvider>
    </body>
  );
}
