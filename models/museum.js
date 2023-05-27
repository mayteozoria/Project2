const mongoose = require('mongoose')
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const museumSchema = new Schema(
  {
    title: String,
    location: String,
    openingTime: {
      type: String,
      required: trusted
    },
    closingTIme: {
      type: String,
      required: true
    },
    currentExhibit: String,
    addmissionCost: Number
  },
  {
    timestamps: trueexit
  }
)

// Compile the schema into a model and export it
module.exports = mongoose.model('Museum', museumSchema)
