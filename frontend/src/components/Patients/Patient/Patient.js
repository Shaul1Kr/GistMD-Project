import React from "react";
import {
  Card,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core/";
import DeleteIcon from "@material-ui/icons/Delete";
import { deletePatient } from "../../../actions/patients";

import { useDispatch } from "react-redux";
import useStyles from "./styles";

const Patient = ({ patient }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card
      variant="outlined"
      className={classes.card}
      style={{ display: "inline-block" }}
    >
      <CardMedia align="center">
        {patient.gender === "female" ? (
          <img
            src="https://img.icons8.com/ios-filled/100/000000/user-female-circle.png"
            alt=""
          />
        ) : (
          <img
            src="https://img.icons8.com/ios-filled/100/000000/user-male-circle.png"
            alt=""
          />
        )}
      </CardMedia>
      <CardContent className={classes.cardContent}>
        <Typography
          className={classes.text}
          color="textSecondary"
          variant="h6"
          align="center"
        >
          Full Name: {patient.name}
        </Typography>
        <Typography
          className={classes.text}
          color="textSecondary"
          variant="h6"
          align="center"
        >
          Gender: {patient.gender}
        </Typography>
        <Typography
          className={classes.text}
          color="textSecondary"
          variant="h6"
          align="center"
        >
          Age: {patient.age}
        </Typography>
        <Typography
          className={classes.text}
          color="textSecondary"
          variant="h6"
          align="center"
        >
          Language: {patient.language}
        </Typography>
        <Typography
          className={classes.text}
          color="textSecondary"
          variant="h6"
          align="center"
        >
          Surgerys: {patient.surgerys}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePatient(patient._id))}
        >
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Patient;
