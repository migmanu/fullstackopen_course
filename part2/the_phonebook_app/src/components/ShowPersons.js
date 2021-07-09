import React from 'react'
import personService from '../services/persons'

const ShowPersons = (props) => {
    //  returns list of persons to show. Input: array of persons objects. Provides erase button
    const handleErase = id => {
        // erases person object from toShow list using erase method defined in services/persons.js
        if (window.confirm('U sure u never gonna call them?')) {
            personService
                .erase(id)
                .then(() => {
                    props.setPersons(props.persons.filter((item) => item.id !== id))
                    props.setToShow(props.toShow.filter((item) => item.id !== id))
                    
                })
            }
    }

    return (
        <div>
            <ul>
                {props.toShow.map(entry =>
                    <li key={entry.name}>
                        {entry.name}  {entry.number} &nbsp;
                        <button onClick={() => handleErase(entry.id)}>erase</button>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default ShowPersons