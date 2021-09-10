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
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import useStyles from "./styles";
import { creatPatient } from "../../actions/patients";

const getSteps = () => {
  return ["Full Name", "Gender", "Age", "Language", "Surgerys"];
};

const Form = (props) => {
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

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setPatientData((prevState) => {
      return { ...prevState, disable: true };
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    if (activeStep === 0) history.push("/");
    setPatientData((prevState) => {
      return { ...prevState, disable: false };
    });
  };

  const handleNextValidation = (e) => {
    if (e.target.value !== "") {
      setPatientData((prevState) => {
        return { ...prevState, disable: false };
      });
    } else {
      setPatientData((prevState) => {
        return { ...prevState, disable: true };
      });
    }
  };

  return (
    <div>
      <Paper className={classes.paper}>
        <Typography variant="h6">Form</Typography>
        <Stepper
          className={classes.stepper}
          activeStep={activeStep}
          alternativeLabel
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === 0 && (
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
        {activeStep === 1 && (
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
        {activeStep === 2 && (
          <TextField
            name="age"
            variant="outlined"
            label="Age"
            fullWidth
            value={patientData.age}
            type="number"
            onChange={(e) => {
              setPatientData((prevState) => {
                return { ...prevState, age: e.target.value };
              });
              handleNextValidation(e);
            }}
          />
        )}
        {activeStep === 3 && (
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
        {activeStep === 4 && (
          <form
            autoComplete="off"
            noValidate
            className={`${classes.form} ${classes.root}`}
            onSubmit={handleSubmit}
          >
            <>
              {" "}
              <TextField
                name="surgerys"
                variant="outlined"
                label="surgerys"
                fullWidth
                value={patientData.surgerys}
                onChange={(e) => {
                  setPatientData((prevState) => {
                    return { ...prevState, surgerys: e.target.value };
                  });
                  handleNextValidation(e);
                }}
              />
              <Button
                className={classes.buttonSubmit}
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                fullWidth
                disabled={patientData.surgerys === ""}
              >
                Submit
              </Button>
            </>
          </form>
        )}
        {activeStep < 4 && activeStep >= 0 && (
          <ButtonGroup fullWidth>
            <Button
              className={classes.buttonSubmit}
              variant="contained"
              color="primary"
              size="large"
              onClick={handleBack}
            >
              Back
            </Button>
            <Button
              className={classes.buttonSubmit}
              variant="contained"
              color="primary"
              size="large"
              onClick={handleNext}
              disabled={patientData.disable}
            >
              Next
            </Button>
          </ButtonGroup>
        )}
      </Paper>
    </div>
  );
};

export default Form;
