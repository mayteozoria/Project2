const Museum = require('../models/museum')
const Tour = require('../models/tour')

const index = async (req, res) => {
  const museums = await Museum.find({})
  res.render('museums/index', { title: 'All Museums', museums })
}

const show = async (req, res) => {
  const museum = await Museum.findById(req.params.id).populate('tour')
  console.log(museum)
  const tours = museum.tour

  res.render('museums/show', { title: 'Museum Information', museum, tours })
}

const newMuseum = async (req, res) => {
  res.render('museums/new', { title: 'New Museums', errorMsg: '' })
}

const create = async (req, res) => {
  console.log('hit create controller')
  // req.body = !!req.body
  // for (let key in req.body) {
  //   if (req.body[key] === '') delete req.body[key]z
  try {
    const museum = await Museum.create(req.body)
    res.redirect(`/museums/${museum._id}`)
  } catch (err) {
    console.log(err)
    res.render('/museums/new', { errorMsg: err.message })
  }
}
const deleteMuseum = async (req, res) => {
  await Museum.findOneAndDelete({ _id: req.params.id })
  res.render('/museums/index')
}

// const museum = await Museum.findOne({
//   'reviews._id': req.params.id,
//   'reviews.user': req.user._id
// })
// if (!museum) return res.redirect('/museums')
// museum.reviews.remove(req.params.id)
// await museum.save()
// res.redirect(`/museums/${museum._id}`)
// }
module.exports = {
  index,
  new: newMuseum,
  show,
  create,
  delete: deleteMuseum
}
