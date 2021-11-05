import express from 'express';
const app = express();
//
import noteRouter from './routes/noteRouter.js';
//
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
//
app.use(cors());
app.use(express.json());
//
const PORT = process.env.PORT || 1234
const CONNECTION_URL = process.env.MONGODB
//
app.use('/notes', noteRouter)


//
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
.catch((err)=> console.log(err.message));

