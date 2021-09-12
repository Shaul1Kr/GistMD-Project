import React, { useEffect } from "react";
import { AppBar, Grid, IconButton } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GistMD from "./static/images/GistMDI.png";

import { getPatients } from "./actions/patients";
import Patients from "./components/Patients/Patients";
import Form from "./components/Form/Form";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPatients());
  }, [dispatch]);

  return (
    <Router>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <img src={GistMD} alt="GistMD" />
      </AppBar>
      <Switch>
        <Route exact path="/">
          <Grid>
            
            <Link to="/form" className={classes.link}>
            <IconButton className={classes.addPatient}>
              <AddCircleOutlineIcon fontSize="large" />
              Add new patient
            </IconButton>
            </Link>
          </Grid>
          <Grid>
            <Patients />
          </Grid>
        </Route>
        <Route path="/form">
          <Grid container direction="column" justifyContent="center">
            <Form />
          </Grid>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
