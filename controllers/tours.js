const Museum = require('../models/museum')
const Tour = require('../models/tour')

const newTour = async (req, res) => {
  const tours = await Museum.find({}).sort()
  res.render('tours/new', { title: 'Select Tour', tours })
}

const create = async (req, res) => {
  const ticket = req.body.ticket
  req.body.museum = req.params.id
  console.log(req.body)
  try {
    await Tour.create(req.body)
  } catch (err) {
    console.log(err)
  }
  res.redirect(`/museums/${req.params.id}`)
}

module.exports = {
  new: newTour,
  create
}
