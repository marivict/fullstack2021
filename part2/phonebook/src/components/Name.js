import React from 'react'

const Name = ({name, deletePhone}) => {
    return (
      <li>{name.name} {name.number} <button onClick={(() => deletePhone(name.id, name.name))}>Delete</button></li>
    )
}

export default Name