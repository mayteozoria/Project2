const express = require('express')
const router = express.Router()

const toursCtrl = require('../controllers/tours')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/tours/new', ensureLoggedIn, toursCtrl.new)

router.post('/museums/:id/tours/new', ensureLoggedIn, toursCtrl.create)

module.exports = router
