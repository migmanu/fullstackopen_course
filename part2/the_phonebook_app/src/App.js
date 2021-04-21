import React, { useState } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import ShowPersons from './components/ShowPersons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ search, setSearch ] = useState('')
  const [ toShow, setToShow] = useState(persons)

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
    const elementMatchList = []

    persons.forEach(element => {
      if (element.name.substring(0, search.length).toLowerCase() === search.toLowerCase()) {
        elementMatchList.push({name: element.name, number: element.number})
        }
      }
    )
    setToShow(elementMatchList)
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
