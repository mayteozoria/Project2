const Museum = require('../models/museum')
const Tour = require('../models/tour')

const newTour = async (req, res) => {
  const tours = await Museum.find({}).sort()
  res.render('tours/new', { title: 'Book Tour', tours })
}

const create(req,res) {
  req.body.time
}
module.exports = {
  new: newTour,
  create
}
