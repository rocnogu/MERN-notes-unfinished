import express from 'express';
const app = express();
//
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
//
app.use(cors());
app.use(express.json());
//
mongoose.connect("mongodb+srv://rocnogu:MJfDh6gKtDcelqn7@cluster0.x34pf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

//app.use("/", require("./routes/noteRoute"))
app.post('/routes/noteRoute', (req, res) => {
    res.send()
  })
//
app.listen(6969, () => {
    console.log('Server is running on port 6969')
})

