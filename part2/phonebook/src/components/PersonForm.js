import React from 'react'

const PersonForm = ({addNames, handleNames, newName, handleNumbers, newNumber}) => {
 return(
     <>
        <form onSubmit={addNames}>
            Name: <input onChange={handleNames} value={newName}/><br />
            Number: <input onChange={handleNumbers} value={newNumber} />
            <button type="submit">Add</button>
        </form>
     </>
 )
}

export default PersonForm