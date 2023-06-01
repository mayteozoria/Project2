const Museum = require('../models/museum')
const Tour = require('../models/tour')

const newTour = async (req, res) => {
  const tours = await Tour.find({})
  console.log('new tour controller')
  res.render('tours/new', { title: 'Add Tour', tours })
}

const create = async (req, res) => {
  const museum = await Museum.findById(req.params.id)
  try {
    const tour = await Tour.create(req.body)
    museum.tour.push(tour._id)
    await museum.save()
    res.redirect(`/museums/${req.params.id}`)
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  new: newTour,
  create
}
