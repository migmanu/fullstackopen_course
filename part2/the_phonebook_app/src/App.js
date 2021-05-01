import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import ShowPersons from './components/ShowPersons'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ search, setSearch ] = useState('')
  const [ toShow, setToShow] = useState(persons)


  useEffect(() => {
    /* fetches persons array from local server. Sets persons and sets toShow   
    so the app displays whole name list if no search is performed  */
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
        setToShow(response.data)
      })
  }, [])


  const handleNewName = (event) => {
    setNewName(event.target.value) 
  }
 
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
    showElements(event.target.value, persons)
  }

  const showElements = (search, persons) => {
    //  compares search state with persons names. Case insensitive. Returns array with matched elements.  
    const elementMatchArray = []

    persons.forEach(element => {
      if (element.name.substring(0, search.length).toLowerCase() === search.toLowerCase()) {
        elementMatchArray.push({name: element.name, number: element.number})
        }
      }
    )
    setToShow(elementMatchArray)
  }
 
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch} />
      <h3>Add new</h3>
      <PersonForm persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} 
        newNumber={newNumber} setNewNumber={setNewNumber} toShow={toShow} setToShow={setToShow} 
        handleNewName={handleNewName} handleNewNumber={handleNewNumber} />
      <h3>Numbers</h3>
      <ShowPersons toShow={toShow} />
    </div>
  )
}

export default App
