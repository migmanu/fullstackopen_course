import React from 'react'
import personService from '../services/persons'

const PersonForm = (props) => {
  /* Displays form to input new person. Makes POST HTML (create) request to server via personService 
  and updates 'person' and 'toShow' states. In case new name si already in list, it offers to update
  number via PUT (update) request or ignores submission.
   */
    const addPerson = (event) => {
        let names = props.persons.map(person => person.name)
        event.preventDefault()

        const personObject = {
          name: props.newName,
          number: props.newNumber 
        }
        if (names.some((matchName) => matchName === props.newName)) {
          let matchPersonObject = props.persons.filter((matchPerson) => matchPerson.name === props.newName)
          // user prommted alert about repeated name. If they choose not to update number app returns nothing
          if (window.confirm(`Hey, "${props.newName}" is already in the Phonebook. Wanna update number?`) === false) {
            return window.alert('Ok, I guess... Then, please just use a different name')
          }
          let newPersons = props.persons.filter((noMatchPersons) => noMatchPersons.name !== props.newName)
          personService
              .update(matchPersonObject[0].id, personObject)
              .then(returnedPerson => {
                props.setPersons(newPersons.concat(returnedPerson))
                props.setNewName('')
                props.setNewNumber('')
                props.setToShow(newPersons.concat(returnedPerson))
                props.setGUIMessage(`Success: ${personObject.name}'s phone has been updated`)
                setTimeout(() => {
                  props.setGUIMessage(null)
                }, 5000)
              })
              .catch(() => {
                props.setGUIMessage(`Fail: ${personObject.name}'s info has already been removed from Phonebook`)
                setTimeout(() => {
                    props.setGUIMessage(null)
                }, 5000)
                })
    
        } else {
          personService
          .create(personObject)
          .then(returnedPerson => {
            props.setPersons(props.persons.concat(returnedPerson))
            props.setNewName('')
            props.setNewNumber('')
            props.setToShow(props.toShow.concat(returnedPerson))
            props.setGUIMessage(`Success: ${personObject.name} has been added to the Phonebook`)
            setTimeout(() => {
              props.setGUIMessage(null)
            }, 5000)
          })
        }

        
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