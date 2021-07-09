import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import ShowPersons from './components/ShowPersons'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ search, setSearch ] = useState('')
  const [ toShow, setToShow] = useState(persons)

  useEffect(() => {
    /* fetches persons array from local server using personService (/services/persons.js). 
    Sets persons and toShow states so the app displays whole name list while no search is 
    performed in contacts filter  */
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
        setToShow(initialPersons)
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
    //compares search state with persons names. Case insensitive. Returns array with matched elements.  
    const elementMatchArray = []
    persons.forEach(element => {
      if (element.name.substring(0, search.length).toLowerCase() === search.toLowerCase()) {
        elementMatchArray.push({name: element.name, number: element.number, id: element.id})
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
      <ShowPersons toShow={toShow} setToShow={setToShow} persons={persons} setPersons={setPersons} />
    </div>
  )
}

export default App
