import React from "react";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

import Patient from "./Patient/Patient";

import useStyles from "./styles";

const Patients = () => {
  const patients = useSelector((state) => state.patients);
  const classes = useStyles();

  return !patients.length ? (
    <h1 align="center">No patients</h1>
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={5} 
    >
      {patients.map((patient) => (
        <Grid key={patient._id}  item >
          <Patient patient={patient}  />
        </Grid>
      ))}
    </Grid>
  );
};

export default Patients;
