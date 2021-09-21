import React,{useState, useEffect} from 'react'
import Note from './components/Note'
import noteServices from './services/notes'
import Notification from './components/Notification'
import Footer from  './components/Footer'


const App = (props) => {

  const [notes, setNotes] = useState([])
  const [newNotes, setNewNotes] = useState()
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    noteServices
    .getAll()
    .then( response => {
      setNotes(response)
    } )
  }, [])

  const addNotes = (e) =>{
    e.preventDefault()
    const noteObject = {
      content: newNotes,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1
    }

    noteServices
    .create(noteObject)
    .then((response) => {
      console.log(response)
      setNotes(notes.concat(response))
      setNewNotes('')
    })
  }

  const handleNoteChange = (event) => {
    setNewNotes(event.target.value)
  }

  const notesToShow = showAll 
    ? notes
    : notes.filter(note => note.important)

  const toggleOfImportance = (id) => {
    const  note = notes.find(n => n.id === id)
    const changeNote = {...note, important: !note.important}

    noteServices
    .update(changeNote, id)
    .then(response => {
      setNotes(notes.map(note => note.id !== id ? note : response))
    })
    .catch(error => {
      setErrorMessage(
        `Note: '${note.content}' was already removed from server`
      )

      setTimeout(()=>{
        setErrorMessage(null)
      }, 5000)

      setNotes(notes.filter(n => n.id !== id))
    })

    console.log('importance of ' + id + ' needs to be toggled')
    
  }

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
      <button onClick={()=>{
        setShowAll(!showAll)
      }}>Show { showAll ? 'Important' : 'All'}</button>
      </div>
      <ul>
        {notesToShow.map(note =>
         <Note 
          key={note.id} 
          note={note} 
          toggleOfImportance ={()=>toggleOfImportance(note.id)}  
        />
        )}
      </ul>
      <form onSubmit={addNotes}>
        <input onChange={handleNoteChange} value={newNotes} />
        <button type="submit">Save</button>
      </form>
      <Footer />
    </div>
  );
}

export default App;
