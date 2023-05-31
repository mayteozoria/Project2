const Museum = require('../models/museum')

const create = async (req, res) => {
  const museum = await Museum.findById(req.params.id)
  req.body.user = req.user._id
  req.body.userName = req.user.name
  req.body.userAvatar = req.user.avatar
  museum.reviews.push(req.body)
  try {
    await museum.save()
    res.redirect(`/museums/${museum._id}`)
  } catch (err) {
    console.log(err)
  }
}
const deleteReview = async (req, res) => {
  const museum = await Museum.findOne({
    'reviews._id': req.params.id,
    'reviews.user': req.user._id
  })
  if (!museum) return res.redirect('/museums')
  museum.reviews.remove(req.params.id)
  await museum.save()
  res.redirect(`/museums/${museum._id}`)
}

module.exports = {
  create,
  delete: deleteReview
}
