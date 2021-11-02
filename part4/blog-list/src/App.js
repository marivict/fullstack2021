import React,{useState} from 'react'
import './style/style.css'
import Card from './components/Card'

const App = ({blog}) => {
  const [posts, setPosts] = useState(blog)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [link, setLink] = useState('')
  let [like, setLike] = useState(0)

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
    setPosts(posts.map(post => post.id !== id ? post : addLike))
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
    setPosts(posts.concat(newObject))

    setTitle('')
    setAuthor('')
    setLink('')
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
              addLikes={() => addLikes(post.id)}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;
