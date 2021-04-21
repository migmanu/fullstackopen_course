import React from 'react'

const ShowPersons = (props) => {
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