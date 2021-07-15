import React from 'react'
import personService from '../services/persons'

const ShowPersons = (props) => {
    //  returns list of persons to show. Input: array of persons objects. Provides erase button
    const handleErase = personObject => {
        // erases person object from toShow list using erase method defined in services/persons.js
        if (window.confirm('U sure u never gonna call them?')) {
            personService
                .erase(personObject.id)
                .then(() => {
                    props.setPersons(props.persons.filter((item) => item.id !== personObject.id))
                    props.setToShow(props.toShow.filter((item) => item.id !== personObject.id))    
                })
            }
    }

    return (
        <div>
            <ul>
                {props.toShow.map(personObject =>
                    <li key={personObject.name}>
                        {personObject.name}  {personObject.number} &nbsp;
                        <button onClick={() => handleErase(personObject)}>erase</button>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default ShowPersons