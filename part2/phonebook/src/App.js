// Dependencies
import React,{useState, useEffect} from 'react'
import axios from 'axios'
import userServices from './services/users'

// Components
import Person from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'

const App = () => {
  const [names, setNames] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] =  useState('')
  const [message, setMessage] =  useState(null)
  const [style, setStyle] = useState('')

  useEffect(() => {
    userServices.getAll()
    .then( response => {
      setNames(response)
    })
  }, [])

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

const replacePhone = (name, id) => {
  // eslint-disable-next-line no-restricted-globals
  const confirmAlert = confirm(`${name} is already added to phonebook, Would you like to replace the old number with the new one?`)
  const user = names.find(n => n.id === id)
  const changeName = {...user, number:newNumber}
  if(confirmAlert) {
    userServices.update(id, changeName)
    .then(response => 
      setNames(names.map( name => name.id !== id ? name : response))
    ) 
  }
}

  const addNames = (e) =>{
    e.preventDefault()

    const newObjectName = {
      name: newName,
      number:newNumber
    }
    
    const findRepeatedName = names.find(name=> name.name === newName)
    if(findRepeatedName){
      replacePhone(findRepeatedName.name, findRepeatedName.id)
    }else {
      userServices.create(newObjectName)
      .then(response =>
        setNames(names.concat(response)
      ))
      .catch(error => {
        console.log(error.response.data)
      })
      setMessage(`${newName} has been added`)
      setStyle('new')
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }

    setNewName('')
    setNewNumber('')
    
  }

  const deletePhone = (id, name) => {
    // eslint-disable-next-line no-restricted-globals
    const confirmAlert = confirm(`Delete ${name} ?`)
    if (confirmAlert)  {
      return(
        userServices
        .remove(id)
        .then(response =>
            setNames(names.filter(name => name.id !== id)),
            setMessage(`The user has been deleted correctly`),
            setStyle('error'),
            setTimeout(() => {
              setMessage(null)
            }, 5000)
        )
        .catch(error =>{
          return(
            setMessage(`The information has been removed from the server`),
            setStyle('error'),
            setTimeout(() => {
              setMessage(null)
            }, 5000)
          )
        }
        
        )
      )
    }
  }

  return (
    <div>
     <h1>PhoneBook</h1>
     <Notification message={message} classStyle={style} />
     <b>Filter: </b><Filter filter={filter} handleFilter={handleFilter} />
     <h1>Add New</h1>
      <PersonForm 
        addNames = {addNames}
        handleNames = {handleNames}
        newName = {newName}
        handleNumbers = {handleNumbers}
        newNumber = {newNumber}
      />
     <h1>Numbers</h1>
     <Person getNames={getNames} deletePhone = {deletePhone} />
    </div>
  );
}

export default App;
