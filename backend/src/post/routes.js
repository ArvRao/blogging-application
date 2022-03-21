const { Router } = require('express')
const router = Router()
const controller = require('./controllers')

router.get('/', controller.getAllPosts)
router.get('/:id', controller.getPostsById)
router.post('/', controller.addPost)
router.post('/:id', controller.updatePost)
router.delete('/:id', controller.deletePost)

module.exports = router
