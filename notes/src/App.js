import axios from 'axios'
import React,{useState, useEffect} from 'react'
import Note from './components/Note'

const App = (props) => {

  const [notes, setNotes] = useState([])
  const [newNotes, setNewNotes] = useState()
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    axios
    .get('http://localhost:3001/notes')
    .then( response => {
      console.log('promise fulfilled')
      setNotes(response.data)
    } )
  }, [])
  console.log('render', notes.length, 'notes')

  const addNotes = (e) =>{
    e.preventDefault()
    const noteObject = {
      content: newNotes,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1
    }

    setNotes(notes.concat(noteObject))
    setNewNotes('')
  }

  const handleNoteChange = (event) => {
    setNewNotes(event.target.value)
  }

  const notesToShow = showAll 
    ? notes
    : notes.filter(note => note.important)

  
  return (
    <div>
      <h1>Notes</h1>
      <button onClick={()=>{
        setShowAll(!showAll)
      }}>Show { showAll ? 'Important' : 'All'}</button>
      <ul>
        {notesToShow.map(note =>
         <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNotes}>
        <input onChange={handleNoteChange} value={newNotes} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default App;
