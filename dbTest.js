

// topic can have multiple posts associated with it
// post can be associated with mutiple topics





const models = require('./models')

const testing = async () => {


  await models.topic.findOrCreate({
    where: {
      name: 'organic foods'
    }
  })
  
  await models.topic.findOrCreate({
    where: {
      name: 'local vegetables'
    }
  })
  
  await models.post.findOrCreate({
    where: {
      title: 'urban farms popping up all over',
      description: 'they are absolutely everywhere'
    }
  })
  
  await models.post.findOrCreate({
    where: {
      title: 'overwhelming number of farmers markets',
      description: 'i am overwhelmed'
    }
  })
  
  
  let topic1 = await models.topic.findOne({
    where: {
      name: 'organic foods'
    }
  })
  
  let topic2 = await models.topic.findOne({
    where: {
      name: 'local vegetables'
    }
  })
  
  let post1 = await models.post.findOne({
    where: {
      title: 'urban farms popping up all over'
    }
  })
  
  let post2 = await models.post.findOne({
    where: {
      title: 'overwhelming number of farmers markets'
    }
  })
  
  
  await post1.addTopic(topic1)
  await topic2.addPost(post1)
  // now post1 should be in both topic1 and topic2
  
  let post1Topics = await post1.getTopics()
  console.log(post1Topics);
  
  
  await topic1.addPost(post2)
  // not topic1 should have both post1 and post2
  
  let topic1Posts = await topic1.getPosts()
  console.log(topic1Posts);
  
  
}


testing()