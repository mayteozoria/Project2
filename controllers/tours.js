const Museum = require('../models/museum')
const Tour = require('../models/tour')

const newTour = async (req, res) => {
  const tours = await Tour.find({})
  console.log('new tour controller')
  res.render('tours/new', { title: 'Add Tour', tours })
}

const create = async (req, res) => {
  // const ticket = req.body.ticket
  req.body.ticketNumber = req.params.id
  try {
    await Tour.create(req.body)
  } catch (err) {
    console.log(err)
  }
  res.redirect(`/tours/new`)
}

module.exports = {
  new: newTour,
  create
}
