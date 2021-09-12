import axios from 'axios';
import * as constant from '../utils/const';
// Making api calls
export const fetchPatients = () => axios.get(constant.URL);
export const creatPatient = (newPatient) => axios.post(constant.URL, newPatient);
export const deletePatient = (id) => axios.delete(`${constant.URL}${id}`);