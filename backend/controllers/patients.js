import mongoose from "mongoose";
import PatientsData from "../models/paitentsData.js";

export const getPatients = async (req, res) => {
  try {
    const patientsData = await PatientsData.find();

    res.status(200).json(patientsData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPatient = async (req, res) => {
  const patient = req.body;

  const newPatient = new PatientsData(patient);

  try {
    await newPatient.save();

    res.status(201).json(newPatient);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deletePatient = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No patient with id: ${id}`);
  }

  await PatientsData.findByIdAndRemove(id);

  res.json({ message: "Patient deleted successfully." });
};
