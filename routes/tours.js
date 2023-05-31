const express = require('express')
const router = express.Router()

const toursCtrl = require('../controllers/tours')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/museums/tours', toursCtrl.new)
router.post('/museums', ensureLoggedIn, toursCtrl.create)
router.post('/museums/:id/tours/new', toursCtrl.create)

module.exports = router
