const express = require('express')
const router = express.Router()

const toursCtrl = require('../controllers/tours')

router.get('/museums/:id/tours', toursCtrl.new)

router.post('/museums/:id/tours/new', toursCtrl.create)

module.exports = router
