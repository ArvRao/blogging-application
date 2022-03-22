const { Router } = require('express')
const router = Router()
const controller = require('./controllers')

router.get('/:id', controller.getAllCommentsById)

module.exports = router
