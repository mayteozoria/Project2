const Museum = require('../models/museum')

const index = async (req, res) => {
  const museums = await Museum.find({})
  console.log(museums)
  res.render('museums/index', { title: 'All Museums', museums })
}

const show = async (req, res) => {
  const museum = await Museum.findById(req.params.id)
  res.render('museums/show', { title: 'Museum Information', museum })
}

const newMuseum = async (req, res) => {
  res.render('museums/new', { title: 'New Museums', errorMsg: '' })
}

const create = async (req, res) => {
  req.body = !!req.body
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  try {
    const museum = await Museum.create(req.body)
    res.redirect(`/museums/${museum._id}`)
  } catch (err) {
    res.render('/museums/new', { errorMsg: err.message })
  }
}

module.exports = {
  index,
  new: newMuseum,
  show,
  create
}
