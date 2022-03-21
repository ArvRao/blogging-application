const { Router } = require('express')
const router = Router()
const controller = require('./controllers')

router.get('/', controller.getAllBloggers)
router.post('/', controller.addBlogger)
router.get('/:id', controller.getBloggersById)
router.put('/:id', controller.updateBlogger)
router.delete('/:id', controller.deleteBlogger)

module.exports = router
