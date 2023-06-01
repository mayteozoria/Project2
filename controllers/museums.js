const Museum = require('../models/museum')
const Tour = require('../models/tour')

const index = async (req, res) => {
  const museums = await Museum.find({})
  res.render('museums/index', { title: 'All Museums', museums })
}

const show = async (req, res) => {
  const museum = await Museum.findById(req.params.id).populate('reviews')
  const tours = await Tour.findById(req.params.id).populate('tours')
  res.render('museums/show', { title: 'Museum Information', museum, tours })
}

const newMuseum = async (req, res) => {
  res.render('museums/new', { title: 'New Museums', errorMsg: '' })
}

const create = async (req, res) => {
  console.log('hit create controller')
  req.body.title = !!req.body.title
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  try {
    const museum = await Museum.create(req.body)
    res.redirect(`/museums/${museum._id}`)
  } catch (err) {
    console.log(err)
    res.render('/museums/new', { errorMsg: err.message })
  }
}

module.exports = {
  index,
  new: newMuseum,
  show,
  create
}
