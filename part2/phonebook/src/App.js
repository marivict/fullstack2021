import React,{useState} from 'react'
import Person from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = (props) => {
  const [names, setNames] = useState( [
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] =  useState('')

  const handleNames = (e) =>{
    setNewName(e.target.value)
  }

  const handleNumbers = (e) =>{
    setNewNumber(e.target.value)
  }

  const handleFilter = (e) => {
    setFilter(e.target.value)
  }


const getNames =  names.filter((name) => {
  if(filter === ''){
    return name
  } else if (name.name.toLowerCase().includes(filter.toLowerCase())){
    return name
  }
    
})

  const addNames = (e) =>{
    e.preventDefault()

    const newObjectName = {
      name: newName,
      number:newNumber
    }
    
    const findRepeatedName = names.find(name=> name.name === newName)
    if(findRepeatedName){
      alert(`${newName} is already added to phonebook`)
    }else {
      setNames(names.concat(newObjectName))
    }

    setNewName('')
    setNewNumber('')
    
  }

  return (
    <div>
     <h1>PhoneBook</h1>
     <Filter filter={filter} handleFilter={handleFilter} />
     <h1>Add New</h1>
      <PersonForm 
        addNames = {addNames}
        handleNames = {handleNames}
        newName = {newName}
        handleNumbers = {handleNumbers}
        newNumber = {newNumber}
      />
     <h1>Numbers</h1>
     <Person getNames={getNames} />
    </div>
  );
}

export default App;
