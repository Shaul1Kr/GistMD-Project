import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as constant from "./utils/const.js";

import patientRoutes from './routes/patients.js'

const app = express();


app.use(bodyParser.json());
app.use(cors());

app.use('/', patientRoutes);

//Connecting to the Database
mongoose.connect(constant.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(constant.PORT, () => console.log(`Server Running on Port: http://localhost:${constant.PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
