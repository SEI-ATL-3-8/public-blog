const models = require('../models')

const postController = {}

postController.getAll = async (req,res) => {
    try {
        let posts = await models.post.findAll()
        res.json({
            posts
        }) 
    } catch (error) {
        res.json({error})
    }
}
postController.findOne = async (req,res) => {
    try {
        let post = await models.post.findOne({
            where: {
                id: req.params.id
            }
        })
    // b/c you required models as a whole you have access to all tables
    // and you setup the associations in your models you get access to a custom function like parent.getChildren() in this case post.getComments() since comments is a child to post 
        let comments = await post.getComments()
        res.json({
            post, comments
        })  
    } catch (error) {
        res.json({error})
    }
}

postController.create = async (req,res) => {
    try {
        let post = await models.post.create({
            title: req.body.title,
            description: req.body.description
        })
        res.json({
            post
        })
    } catch (error) {
        res.json({error})
    }
}

postController.update = async (req,res) => {
    
    try {
        let post = await models.post.findOne({
            where: {
                id: req.params.id
            }
        })
        let updates = await post.update(req.body)
        res.json({updates})
    } catch (error) {
        res.json({error})
    }
}

postController.delete = async(req,res) => {
    try {
        let post = await models.post.findOne({
            where: {
                id: req.params.id
            }
        })
        let comments = await post.getComments()
        for(let comment of comments) {
            await comment.destroy()
        }

        let deletedPost = await post.destroy()

        res.json({deletedPost})
    } catch (error) {
        res.json({error})
    }
}

postController.comment = async (req,res) => {
    let post = await models.post.findOne({
        where: {
            id: req.params.id
        }
    })

    // b/c you required models as a whole you have access to all tables
    // so you can also create a new comment 
    let comment = await models.comment.create({
        description: req.body.description
    })
    // then assign that comment to the parent or vice versa B/C you setup your associations in your MODELS which creates these custom functions like addComment() or addPost() or createComment() etc
    post.addComment(comment)
    // OTHER OPTIONS 
    // comment.addPost(post)

    // post.createComment({
    //     description: req.body.description
    // })
    res.json({post, comment 
    })

}

module.exports = postController