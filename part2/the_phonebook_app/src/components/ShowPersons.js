import React from 'react'
import personService from '../services/persons'

const ShowPersons = (props) => {
    //  returns list of persons to show. Input: array
    const handleErase = id => {
        const newPersons = props.persons.filter((item) => item.id !== id)
        personService
            .erase(id)
            .then((erasedPerson) => {
                props.setPersons(newPersons)
                props.setToShow(newPersons)
                window.alert('Person deleted! See you never...')
            })
    }

    return (
        <div>
            <ul>
                {props.toShow.map(entry =>
                    <li key={entry.name}>
                        {entry.name}  {entry.number} &nbsp;
                        <button onClick={() => handleErase(entry.id)}>Erase</button>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default ShowPersons