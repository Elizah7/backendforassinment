const mongoose = require("mongoose")

const notesShcema = mongoose.Schema({
    title: { type: String, required: true },
    status: { type: Boolean, required: true }
})

  
const NotesModel = mongoose.model("notes", notesShcema)

module.exports = {NotesModel}