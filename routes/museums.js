const express = require('express')
const router = express.Router()

const museumsCtrl = require('../controllers/museums')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', museumsCtrl.index)

router.get('/new', ensureLoggedIn, museumsCtrl.new)

router.get('/:id', museumsCtrl.show)

router.post('/', ensureLoggedIn, museumsCtrl.create)

module.exports = router
