import axios from 'axios';

const url = 'http://localhost:5000/';

export const fetchPatients = () => axios.get(url);
export const creatPatient = (newPatient) => axios.post(url, newPatient);
export const deletePatient = (id) => axios.delete(`${url}${id}`);