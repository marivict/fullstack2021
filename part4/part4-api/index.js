const express = require('express')
const app = express()

app.use(express.json())

let posts = [
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
    {
    "id": 3,
    "title": "Do Americans Know What a Massive Ripoff American Life Really Is?",
    "author": "umair haque",
    "link": "https://eand.co/do-americans-know-what-a-massive-ripoff-american-life-really-is-8804aa6b65fa",
    "likes": 8
    },
    {
    "id": 4,
    "title": "3 Things Go Needs Right Now More Than Generics",
    "author": "Ryan Collingham",
    "link": "https://betterprogramming.pub/three-things-go-needs-right-now-more-than-generics-a6225d62f76b",
    "likes": 15
    },
    {
    "id": 5,
    "title": "You Dont Need Bitcoin to Become Rich; There Are Other Ways",
    "author": "Selçuk Sevindik",
    "link": "https://selcuksevindik.medium.com/you-dont-need-bitcoin-to-become-rich-there-are-other-ways-ecfdf6b88463",
    "likes": 10
    },
    {
    "id": 6,
    "title": "How to talk with spirits",
    "author": "Walter Mercado",
    "link": "https://fullstackopen.com/en/part4/structure_of_backend_application_introduction_to_testing",
    "likes": 3
    },
    {
    "id": 7,
    "title": "What is Bonjour in my computer?",
    "author": "KOLADE CHRIS",
    "link": "https://www.freecodecamp.org/news/what-is-bonjour-on-my-computer/",
    "likes": 2
    },
    {
    "id": 8,
    "title": "The Different Ways to Charge for a Website Project – Freelance Developer Guide",
    "author": "KYLE PRINSLOO",
    "link": "https://www.freecodecamp.org/news/different-ways-to-charge-for-a-website/",
    "likes": 0
    },
    {
    "id": 9,
    "title": "How to Write Your Own Browser Extension [Example Project Included]",
    "author": "ABHILEKH GAUTAM",
    "link": "https://www.freecodecamp.org/news/#:~:text=How%20to%20Write%20Your%20Own%20Browser%20Extension%20%5BExample%20Project%20Included%5D",
    "likes": 1
    }
]

app.get('/', (request, response) =>{
    response.send('<h1>Hello World</h1>')
})

app.get('/api/posts', (request, response) => {
    response.json(posts)
})

app.get('/api/posts/:id', (request, response) => {
    const id = Number(request.params.id)
    const post = posts.find(post => post.id === id)
    response.json(post)
})

app.delete('/api/posts/:id', (request, response) => {
    const id = Number(request.params.id)
    posts = posts.filter(post => post.id !== id)
    response.sendStatus(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})