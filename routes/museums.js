const express = require('express')
const router = express.Router()

const museumsCtrl = require('../controllers/museums')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', ensureLoggedIn, museumsCtrl.index)

router.get('/new', ensureLoggedIn, museumsCtrl.new)

router.get('/:id', ensureLoggedIn, museumsCtrl.show)

router.post('/', ensureLoggedIn, museumsCtrl.create)

//new delete option
router.delete('/:id', museumsCtrl.delete)

module.exports = router
