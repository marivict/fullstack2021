import React,{useState, useEffect} from 'react'
import axios from 'axios'
import './style/style.css'
import Card from './components/Card'
import postServices from './services/posts'

const App = () => {
  const [posts, setPosts] = useState([])
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [link, setLink] = useState('')

  useEffect(() => {
    postServices
    .getAll()
    .then(initialState => {
      setPosts(initialState)
    })
  },[])

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleAuthor = (e) => {
    setAuthor(e.target.value)
  }

  const handleLink = (e) => {
    setLink(e.target.value)
  }

  const addLikes = (id) => {
    const post = posts.find( n => n.id === id)
    const addLike = {...post, likes: post.likes += 1 }

    postServices
    .update(id, addLike)
    .then(returnedPost =>{
      setPosts(posts.map(post => post.id !== id ? post : returnedPost))
    })    
    
  }

  const addPost = (e) => {
    e.preventDefault()
    const newObject = {
      id:posts.length + 1,
      title:title,
      author:author,
      link:link,
      likes:0
    }

    postServices
    .create(newObject)
    .then(returnedPost => {
      setPosts(posts.concat(returnedPost))
    })

    setTitle('')
    setAuthor('')
    setLink('')
  }

  const deletePost = (id) => {
    return(
      postServices
      .remove(id)
      .then(() => {
        return(setPosts(posts.filter(post => post.id !== id)))
      })
      .catch(() => {
        console.log('there be an error')
      })
    )
  }

  return (
    <div className='blog-posts'>
      <h1 className='text-center'>Add New Links Posts</h1>
      <div className='form'>
        <form>
          <div className='container'>
            <div className='container-box'>
              <div className='input-text'>
                <b>Title: </b>
                <input 
                  type='text' 
                  value={title} 
                  onChange={handleTitle}
                />
              </div>
              <div className='input-text'>
                <b>Author: </b>
                <input 
                  type='text' 
                  value={author}
                  onChange = {handleAuthor}
                  />
              </div>
              <div className='input-text'>
                <b>Link: </b>
                <input 
                  type='text' 
                  value={link}
                  onChange = {handleLink}
                  />
              </div>
              <button 
                className='post-btn' 
                type='submit'
                onClick={addPost}>
                  Add Post</button>
            </div>
          </div>
        </form>
      </div>
      <div className="cards">
        <h1 className='text-center'>Posts Links</h1>
        <div className="container">
          {posts.map(post => 
            <Card 
              key={post.id} 
              post={post} 
              addLikes={() => addLikes(post.id)}
              deletePost={() => deletePost(post.id) }
              />)
              
              }
        </div>
      </div>
    </div>
  );
}

export default App;
