import React from 'react'

const Note = ({note, toggleOfImportance}) => {
  const label =  note.important ? 'make not important' : 'make important'

    return (
      <li className='note'>
        {note.content}
        <button onClick={toggleOfImportance}>{label}</button>
        </li>
    )
}

export default Note