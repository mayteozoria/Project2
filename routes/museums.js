var express = require('express')
var router = express.Router()

const museumsCtrl = require('../controllers/museums')

router.get('/', museumsCtrl.index)

router.get('/new', museumsCtrl.new)

router.get('/:id', museumsCtrl.show)

router.post('/', museumsCtrl.create)

module.exports = router
