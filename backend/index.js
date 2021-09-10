import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import patientRoutes from './routes/patients.js'

const app = express();


app.use(bodyParser.json());
app.use(cors());

app.use('/', patientRoutes);

const CONNECTION_URL = 'mongodb+srv://shauli:sh6638120@cluster0.lefci.mongodb.net/mern';
const PORT = 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
