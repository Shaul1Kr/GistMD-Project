import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  stepper: {
    width: "auto",
  },
  exit: {
    padding: "0",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10% 0",
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  div: {
    margin: "auto",
    marginTop: "10%",
  },
  dialogTitle: {
    color: "rgba(246, 0, 0, 0.87)",
  },
  buttonGroup: {
    width: "60%",
    position: "relative",
    left: "40%",
    paddingTop: "5%",
  },
  exitColor: {
    color: "#3f51b5",
  },
  typography: {
    display: "inline",
    paddingRight: "77%",
  },
  link: {
    textDecoration: 'auto',
  }
}));
