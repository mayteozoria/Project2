const express = require('express')
const router = express.Router()

const toursCtrl = require('../controllers/tours')

router.get('/museums/:id/tours', ticketsCtrl.new)

router.post('/museums/:id/tours/new', ticketsCtrl.create)
