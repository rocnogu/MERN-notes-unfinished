import mongoose from 'mongoose';
//
const { Schema } = mongoose;
const noteSchema = new Schema( {
title: String,
content: String
});

const Note = mongoose.model("Note", noteSchema);
//
const note = new Note({});
//
export default mongoose.models.Note || mongoose.model("Note", noteSchema);
