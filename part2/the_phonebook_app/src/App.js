import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')


  const addPerson = (event) => {
  
    let names = persons.map(person => person.name)

    if (names.some((name) => name === newName)) {
      return window.alert(`${newName} is already added to the phonebook`)
    }

    event.preventDefault()
    const personObject = {
      name: newName
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  
  const handleNewName = (event) => {
    setNewName(event.target.value)
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
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <li key={person.name}>
            {person.name}
          </li>)}
      </ul>
    </div>
  )
}

export default App
