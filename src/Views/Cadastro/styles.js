import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "25px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "calc(100vh - 89px)",
  },
  center: {
    textAlign: "center",
  },
  form: {
    paddingTop: "20px",
  },
  button: {
    marginTop: "20px",
    marginRight: "20px",
  },
  actions: {
    textAlign: "left",
  },
  card: {
    textAlign: "center",
    maxWidth: "500px",
  },
}));
