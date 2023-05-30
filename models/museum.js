const mongoose = require('mongoose')

const Schema = mongoose.Schema

const museumSchema = new Schema(
  {
    title: String,
    location: String,
    openingTime: {
      type: String
    },
    closingTime: {
      type: String
    },
    nowOpening: {
      type: Boolean,
      default: true
    }
  },
  {
    currentExhibit: String,
    addmissionCost: Number
  },
  {
    timestamps: true
  }
)

// Compile the schema into a model and export it
module.exports = mongoose.model('Museum', museumSchema)
