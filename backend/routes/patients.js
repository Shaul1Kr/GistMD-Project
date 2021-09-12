import express from 'express';

import { getPatients, createPatient, deletePatient} from '../controllers/patients.js';

const router = express.Router();

// http://localhost:3000
router.get('/', getPatients);
router.post('/', createPatient);
router.delete('/:id', deletePatient);

export default router;