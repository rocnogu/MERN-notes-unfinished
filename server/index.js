import express from 'express';
const app = express();
//
import noteRouter from './routes/noteRouter';
//
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
//
app.use(cors());
app.use(express.json());
//
mongoose.connect(process.env.MONGODB)
//
app.use('/create', noteRouter)
//
app.listen(6969, () => {
    console.log('Server is running on port 6969')
})

