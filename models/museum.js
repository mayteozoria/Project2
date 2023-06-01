const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reviewSchema = new Schema(
  {
    content: {
      type: String,
      required: true
    },
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
    title: {
      type: String
    },
    location: {
      type: String
    },
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

module.exports = mongoose.model('Museum', museumSchema)
