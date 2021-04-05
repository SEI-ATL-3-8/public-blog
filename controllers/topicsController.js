const models = require('../models')

const topicsController = {}

topicsController.allTopics = async (req, res) => {
  try {
    const topics = await models.topic.findAll()
    res.json({topics})
  } catch (error) {
    res.json({error})
  }
}

topicsController.associateWithPost = async (req, res) => {
  try {
    const topic = await models.topic.findOne({
      where: {
        id: req.params.topicId
      }
    })

    const post = await models.post.findOne({
      where: {
        id: req.params.postId
      }
    })
  
    await topic.addPost(post)
  
    res.json({
      message: 'ok',
      topicId: topic.id,
      postId: post.id
    })

  } catch (error) {
    res.json({error})
  }
}

topicsController.getPosts = async (req, res) => {
  try {
    const topic = await models.topic.findOne({
      where: {
        id: req.params.id
      }
    })

    const posts = await topic.getPosts()

    res.json({posts, topic})
  } catch (error) {
    res.json({error})
  }
}

module.exports = topicsController