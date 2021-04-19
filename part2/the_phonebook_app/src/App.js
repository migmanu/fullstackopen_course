import React, { useState } from 'react'

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


  const addPerson = (event) => {
    let names = persons.map(person => person.name)
    event.preventDefault()

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
    setToShow(toShow.concat(personObject))
  }
  
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
      <h1>Phonebook</h1>
      filter contacts by name<input value={search}
      onChange={handleSearch}/>
      <h2>Add new</h2>
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
         {toShow.map(entry =>
          <li key={entry.name}>
            {entry.name}  {entry.number}
          </li>
      )}
      </ul>
    </div>
  )
}

export default App
