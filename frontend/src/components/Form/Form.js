import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Select,
  InputLabel,
  FormControl,
  ButtonGroup,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  IconButton,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ClearIcon from "@material-ui/icons/Clear";
import { Link } from "react-router-dom";

import useStyles from "./styles";
import { creatPatient } from "../../actions/patients";
import * as constant from "../../utils/const";

const Form = () => {
  let history = useHistory();
  const [patientData, setPatientData] = useState({
    name: "",
    gender: "",
    age: "",
    language: "",
    surgerys: "",
    step: 0,
    disable: true,
  });
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(creatPatient(patientData));
    setPatientData({
      name: "",
      gender: "",
      age: "",
      language: "",
      surgerys: "",
    });
    history.push("/");
  };

  const [activeStep, setActiveStep] = React.useState(constant.STEPS.NAME_STEP);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setPatientData((prevState) => {
      return { ...prevState, disable: true };
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    if (activeStep === constant.STEPS.NAME_STEP) history.push("/");
    setPatientData((prevState) => {
      return { ...prevState, disable: false };
    });
  };
  //Handle the validation for every input
  const handleNextValidation = (e) => {
    if (
      e.target.value !== "" &&
      activeStep === constant.STEPS.AGE_STEP &&
      e.target.value >= constant.RANGE.MIN_AGE &&
      e.target.value <= constant.RANGE.MAX_AGE
    ) {
      setPatientData((prevState) => {
        return { ...prevState, disable: false };
      });
    } else if (
      e.target.value !== "" &&
      activeStep === constant.STEPS.SURGERYS_STEP &&
      e.target.value.length >= constant.RANGE.MIN_LENGTH &&
      e.target.value.length <= constant.RANGE.MAX_LENGTH
    ) {
      setPatientData((prevState) => {
        return { ...prevState, disable: false };
      });
    } else if (
      e.target.value !== "" &&
      activeStep !== constant.STEPS.AGE_STEP &&
      activeStep !== constant.STEPS.SURGERYS_STEP
    ) {
      setPatientData((prevState) => {
        return { ...prevState, disable: false };
      });
    } else {
      setPatientData((prevState) => {
        return { ...prevState, disable: true };
      });
    }
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.div}>
      <Paper className={classes.paper}>
        <form action="/" onSubmit={handleSubmit}>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle
              className={classes.dialogTitle}
              id="alert-dialog-title"
            >
              {"Are you sure you want to cancel?"}
            </DialogTitle>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                No
              </Button>
              <Link to="/" className={classes.link}>
                <Button color="primary" autoFocus>
                  Yes
                </Button>
              </Link>
            </DialogActions>
          </Dialog>
          <Typography className={classes.typography} variant="h6">
            Form
          </Typography>
          <IconButton className={classes.exit} onClick={handleClickOpen}>
            <ClearIcon className={classes.exitColor} fontSize="large" />
          </IconButton>
          <Grid>
            <Stepper
              className={classes.stepper}
              activeStep={activeStep}
              alternativeLabel
            >
              {constant.GET_STEP.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
          {activeStep === constant.STEPS.NAME_STEP && (
            <TextField
              name="name"
              variant="outlined"
              label="Name"
              fullWidth
              value={patientData.name}
              onChange={(e) => {
                setPatientData((prevState) => {
                  return { ...prevState, name: e.target.value };
                });
                handleNextValidation(e);
              }}
            />
          )}
          {activeStep === constant.STEPS.GENDER_STEP && (
            <FormControl component="fieldset" fullWidth>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                row
                aria-label="gender"
                value={patientData.gender}
                onChange={(e) => {
                  handleNextValidation(e);
                  setPatientData((prevState) => {
                    return { ...prevState, gender: e.target.value };
                  });
                }}
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio color="primary" />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
          )}
          {activeStep === constant.STEPS.AGE_STEP && (
            <TextField
              name="age"
              variant="outlined"
              label="Age"
              fullWidth
              value={patientData.age}
              type="number"
              helperText="*Please enter a age between 0-120."
              onChange={(e) => {
                setPatientData((prevState) => {
                  return { ...prevState, age: e.target.value };
                });
                handleNextValidation(e);
              }}
            />
          )}
          {activeStep === constant.STEPS.LANGUAGE_STEP && (
            <FormControl
              variant="outlined"
              fullWidth
              className={classes.formControl}
            >
              <InputLabel htmlFor="outlined-age-native-simple">
                Language
              </InputLabel>
              <Select
                native
                value={patientData.language}
                onChange={(e) => {
                  setPatientData((prevState) => {
                    return { ...prevState, language: e.target.value };
                  });
                  handleNextValidation(e);
                }}
                label="Language"
              >
                <option value={""}></option>
                <option value={"hebrew"}>Hebrew</option>
                <option value={"english"}>English</option>
                <option value={"russian"}>Russian</option>
                <option value={"arbic"}>Arabic</option>
              </Select>
            </FormControl>
          )}
          {activeStep === constant.STEPS.SURGERYS_STEP && (
            <TextField
              name="surgerys"
              variant="outlined"
              label="surgerys"
              fullWidth
              helperText="*Please enter a number of characters between 1-50."
              value={patientData.surgerys}
              onChange={(e) => {
                setPatientData((prevState) => {
                  return { ...prevState, surgerys: e.target.value };
                });
                handleNextValidation(e);
              }}
            />
          )}
          {
            <ButtonGroup className={classes.buttonGroup} fullWidth>
              <Button
                className={classes.buttonSubmit}
                variant="contained"
                color="primary"
                size="large"
                onClick={handleBack}
              >
                {activeStep === constant.STEPS.NAME_STEP ? "Exit" : "Back"}
              </Button>
              {activeStep <= constant.STEPS.SURGERYS_STEP ? (
                <Button
                  className={classes.buttonSubmit}
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={handleNext}
                  disabled={patientData.disable}
                >
                  {activeStep < constant.STEPS.SURGERYS_STEP
                    ? "Next"
                    : "Submit"}
                </Button>
              ) : (
                <Button type="submit"></Button>
              )}
            </ButtonGroup>
          }
        </form>
      </Paper>
    </div>
  );
};

export default Form;
