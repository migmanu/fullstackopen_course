import React from 'react';



const ShowOneCountry = (props) => {
    /* 
    Component that displays data for one country. Takes
    one country array as input.
    */
    return (
        <div>
            <h2>{props.country.name}</h2>
            <p>capital: {props.country.capital}</p>
            <p>population: {props.country.population}</p>
            <h3>Languages</h3>
            <ul>
            {props.country.languages.map(entry =>
                <li key={entry.iso639_1}>
                    {entry.name}
                </li>)
            }
            </ul>
            <img src={props.country.flag} alt={props.country.name}
            widht='100' height='100'/>
        </div>
    )
}

export default ShowOneCountry