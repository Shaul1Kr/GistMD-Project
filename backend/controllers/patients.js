import mongoose from "mongoose";
import PatientsData from "../models/paitentsData.js";

// Get all patients from DB
export const getPatients = async (request, result) => {
  try {
    const patientsData = await PatientsData.find();

    result.status(200).json(patientsData);
  } catch (error) {
    result.status(404).json({ message: error.message });
  }
};
// Create new patients and save in DB
export const createPatient = async (request, result) => {
  const patient = request.body;

  const newPatient = new PatientsData(patient);

  try {
    await newPatient.save();

    result.status(201).json(newPatient);
  } catch (error) {
    result.status(409).json({ message: error.message });
  }
};
// Delete a specific patient from DB
export const deletePatient = async (request, result) => {
  const { id } = request.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return result.status(404).send(`No patient with id: ${id}`);
  }

  await PatientsData.findByIdAndRemove(id);

  result.json({ message: "Patient deleted successfully." });
};
