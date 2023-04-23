const express = require('express')
const { getPage, getContent } = require('./controller')
const router = express.Router()

router.get('/', getPage)

router.get('/contents/:id', getContent)


 module.exports = router
