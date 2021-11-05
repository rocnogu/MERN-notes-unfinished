import express from 'express';
import Note from "../models/noteModel.js";

const noteRouter = express.Router();

noteRouter.post('/', (req,res) => {
    const title = req.body.title;
    const content = req.body.content;
    const newNote = new Note({
        title,
        content
    })
    newNote.save()
})

export default noteRouter;