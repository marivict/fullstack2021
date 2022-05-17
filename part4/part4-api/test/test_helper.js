const Posts = require('../models/post')

const initialPosts = [
    {
        "id": 1,
        "title": "In Software, When an Engineer Exits the Team",
        "author": "Doug Arcuri",
        "link": "https://medium.com/@solidi/in-software-when-an-engineer-exits-the-team-1e550303cff8",
        "likes": 4
      },
      {
        "id": 2,
        "title": "Interview Well for Your Next Incredible Engineering Role",
        "author": "Doug Arcuri",
        "link": "https://levelup.gitconnected.com/interview-well-for-your-next-incredible-engineering-role-a5513e6596ae",
        "likes": 11
      },
]

const nonExistingId = async () => {
    const post = new Posts({"title": "Interview Well for Your Next Incredible Engineering Role",
                            "author": "Doug Arcuri",
                            "link": "https://levelup.gitconnected.com/interview-well-for-your-next-incredible-engineering-role-a5513e6596ae",
                            "likes": 11
                        })
    await post.save()
    await post.remove()
}

const postInDb = async () => {
    const posts = await Posts.find({})
    return posts.map(post => post.toJSON())
}

module.exports = {
    initialPosts, nonExistingId, postInDb
}