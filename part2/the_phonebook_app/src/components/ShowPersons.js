import React from 'react'

const ShowPersons = (props) => {
    //  returns list of persons to show. Input: array
    return (
        <div>
            <ul>
                {props.toShow.map(entry =>
                    <li key={entry.name}>
                        {entry.name}  {entry.number}
                    </li>)
                }
            </ul>
        </div>
    )
}

export default ShowPersons