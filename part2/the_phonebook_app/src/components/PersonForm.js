import React from 'react'
import personService from '../services/persons'

const PersonForm = (props) => {

    const addPerson = (event) => {
        let names = props.persons.map(person => person.name)
        event.preventDefault()
    
        if (names.some((name) => name === props.newName)) {
          return window.alert(`${props.newName} is already added to the phonebook`)
        }
    
        const personObject = {
          name: props.newName,
          number: props.newNumber 
        }

        personService
          .create(personObject) //To Do: check if server should update automatically after submit
          .then(returnedPerson => {
            props.setPersons(props.persons.concat(returnedPerson))
            props.setNewName('')
            props.setNewNumber('')
            props.setToShow(props.toShow.concat(returnedPerson))

          })
      }

    return (
      <div>
        <form onSubmit={addPerson}>
          <div>
            Name: <input value={props.newName} 
            onChange={props.handleNewName} />
          </div>
          <div>
            Number: <input value={props.newNumber}
            onChange={props.handleNewNumber} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>
    )

}

export default PersonForm