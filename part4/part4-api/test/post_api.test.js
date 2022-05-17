const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Post = require('../models/post')
const helper = require('./test_helper')

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

beforeEach(async() => {
    await Post.deleteMany({})
    const postObject = helper.initialPosts
        .map(post => new Post(post))
    const promiseArray = postObject.map(post => post.save())
    await Promise.all(promiseArray)
})
//test 4.8
test('notes are returned as json', async ()=> {
    await api
    .get('/api/posts')
    .expect(200)
    .expect('Content-Type', /application\/json/)
}, 10000)

// test 4.8
test('all posts  are returned', async() => {
    const response = await api.get('/api/posts')

    expect(response.body).toHaveLength(helper.initialPosts.length)
})

test('a specific post is within the returned post', async () => {
    const response = await api.get('/api/posts')

    const contents = response.body.map(r => r.title)
    expect(contents).toContain('In Software, When an Engineer Exits the Team')
})

// test 4.10
test('a valid post can be added', async() => {
    const newPost = {
            "id": 5,
            "title": "You Dont Need Bitcoin to Become Rich; There Are Other Ways",
            "author": "Selçuk Sevindik",
            "link": "https://selcuksevindik.medium.com/you-dont-need-bitcoin-to-become-rich-there-are-other-ways-ecfdf6b88463",
            "likes": 10
    }

    await api
    .post('/api/posts')
    .send(newPost)
    .expect(201)
    .expect('Content-Type', /application\/json/)

    const notesAtEnd = await helper.postInDb()
    expect(notesAtEnd).toHaveLength(helper.initialPosts.length + 1)

    const titles = notesAtEnd.map(r => r.title)
    expect(titles).toContain('You Dont Need Bitcoin to Become Rich; There Are Other Ways')

})

test('note without title is not added', async () => {
    const newPost = {
        "id": 5,
        "author": "Selçuk Sevindik",
        "link": "https://selcuksevindik.medium.com/you-dont-need-bitcoin-to-become-rich-there-are-other-ways-ecfdf6b88463",
        "likes": 10
    }

    await api
    .post('/api/posts')
    .send(newPost)
    .expect(400)

    const notesAtEnd = await helper.postInDb()

    expect(notesAtEnd).toHaveLength(helper.initialPosts.length)
})

//test 4.9

// test 4.11

// test 4.12

// test 4.13

// test 4.14

afterAll(() => {
    mongoose.connection.close()
})