import React,{useState} from 'react'
import Note from './components/Note'

const App = (props) => {

  const [notes, setNotes] = useState(props.notes)
  
  const addNotes = (e) =>{
    e.preventDefault()
    console.log('button clicked', e.target)
  }
  
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note =>
         <Note key={note.id} note={note} />
         )}
      </ul>
      <form onSubmit={addNotes}>
        <input type="text" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default App;
