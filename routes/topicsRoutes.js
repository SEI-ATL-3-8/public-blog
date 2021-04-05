const express = require('express')
const router = express.Router()

const topicsController = require('../controllers/topicsController')

router.get('/', topicsController.allTopics)

router.put('/:topicId/posts/:postId', topicsController.associateWithPost)

router.get('/:id/posts', topicsController.getPosts)



module.exports = router