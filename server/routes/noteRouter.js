import Router from 'express';
import Note from "../models/noteModel";

const noteRouter = Router();

noteRouter.route("/create")
.post((req,res) => {
    const title = req.body.title;
    const content = req.body.content;
    const newNote = new Note({
        title,
        content
    })
    newNote.save()
})

export default noteRouter;