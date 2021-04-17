import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      phone: '040-1234567' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    let names = persons.map(person => person.name)

    if (names.some((name) => name === newName)) {
      return window.alert(`${newName} is already added to the phonebook`)
    }

    const personObject = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
    console.log(personObject)
  }
  
  const handleNewName = (event) => {
    setNewName(event.target.value)
  }
 
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} 
          onChange={handleNewName} />
        </div>
        <div>
          number: <input value={newNumber}
          onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <li key={person.name}>
            {person.name} {person.number}
          </li>)}
      </ul>
    </div>
  )
}

export default App
