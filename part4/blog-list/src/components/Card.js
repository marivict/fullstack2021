import React from 'react'

const Card = ({post, addLikes}) => {
    return(
      <div className='card-item'>
        <div className="btn-close">
          <button>X</button>
        </div>
        <h3>{post.title}</h3>
        <p><b>Author: </b>{post.author}</p>
        <p className='card-link'><b>Link: </b><a href={post.link}>{post.link}</a></p>
        <div className='card-footer'>
          <p><button onClick={addLikes}>Vote</button> {post.likes} votes</p>
        </div>
      </div>
    )
  }

export default Card