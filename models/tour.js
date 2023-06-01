const mongoose = require('mongoose')

//const museum = require('./museum')
const Schema = mongoose.Schema

const tourSchema = new Schema(
  {
    ticketNumber: {
      type: Number
    },
    date: {
      type: Date,
      required: () => Date.now() + 365 * 24 * 60 * 60000
    },

    language: {
      type: String,
      enum: ['English', 'Spanish', 'French', 'Italian']
    }
  },

  {
    timestamps: true
  }
)

module.exports = mongoose.model('Tour', tourSchema)
