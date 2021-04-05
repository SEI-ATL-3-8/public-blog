const postController = require('../controllers/postController')

const express = require('express')
const postRoutes = express.Router()

postRoutes.get('/', postController.getAll)
postRoutes.get('/:id', postController.findOne)
postRoutes.post('/',postController.create)
postRoutes.put('/:id',postController.update)
postRoutes.delete('/:id',postController.delete)
postRoutes.post('/:id/comment',postController.comment)
module.exports = postRoutes