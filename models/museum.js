const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reviewSchema = new Schema(
  {
    content: {
      type: String,
      required: true
    },
    // rating: {
    //   type: Number,
    //   min: 1,
    //   max: 5,
    //   default: 5
    // },

    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    userName: String,
    userAvatar: String
  },
  {
    timestamps: true
  }
)
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
    },
    currentExhibit: String,
    reviews: [reviewSchema]
  },
  {
    timestamps: true
  }
)

// Compile the schema into a model and export it
module.exports = mongoose.model('Museum', museumSchema)
