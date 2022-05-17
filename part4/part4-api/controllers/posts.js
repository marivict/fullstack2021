const postsRouter = require('express').Router()
const Post = require('../models/post')

postsRouter.get('/', async (request, response) =>{
    const posts = await Post.find({})
    response.json(posts)
})

postsRouter.get('/:id', async (request, response) => {
    const post = await Post.findById(request.params.id)
    if(post){
      response.json(post)
    } else {
        response.status(404).end()
    }
    
})

postsRouter.post('/', async (request, response) => {
   const body = request.body

   if(!body.title || !body.author || !body.link || !body.link){
    return response.status(400).json({
        error: 'content missing'
    })
   }

   const post = new Post({
       title: body.title,
       author: body.author,
       link: body.link,
       likes: body.likes
   })

   const postSaved = await post.save()
   response.status(201).json(postSaved)
})

postsRouter.delete('/:id', async (request, response) => {
    await Post.findByIdAndRemove(request.params.id)
        response.sendStatus(204).end()
})

module.exports = postsRouter