const dummy = (blogs) => {
    let value = 0
    if(blogs.length > 0){
        value = 1
    }

    return value;
}

const totalLikes = (blogs) => {
 const sum = blogs.reduce((accumulator, object) => {
     return accumulator + object.likes
 }, 0)

 return sum
}

const favoriteBlog = (blogs) => {
    const returnFavBlog = blogs.map(v => ({title: v.title, author: v.author, likes: v.likes}))
    .reduce((accumulator, object) => {
        return(accumulator.likes > object.likes ? accumulator : object)
    })
    return returnFavBlog
}

// const mostBlogs = (blogs) => {
//     const mostAuthorBlogs = blogs.map(blog => (
//         blog.author === 
//     ))
// }

// mostLikes

const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
        _id: "5a422b3a1b54a676234d17f9",
        title: "Canonical string reduction",
        author: "Edsger W. Dijkstra",
        url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
        likes: 12,
        __v: 0
    },
    {
        _id: "5a422b891b54a676234d17fa",
        title: "First class tests",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
        likes: 10,
        __v: 0
    },
  ]

  favoriteBlog(listWithOneBlog)

module.exports = {
    dummy, totalLikes, favoriteBlog
}