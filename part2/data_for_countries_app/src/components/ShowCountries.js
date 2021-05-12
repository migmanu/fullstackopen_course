import React from 'react'
import CountryButton from './CountryButton'


const ShowCountries = (props) => {
    /* Takes countries array as input. 
    If array lenght > 10: returns text soliciting mor filters.
    If countries array lenght > 1 and < 10 returns list of matching countries. Uses
    countries numericCode as list item keys.
    If countries array lenght === 1 returns country details.*/


    if (props.countries.length > 10) {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    }

    if (props.countries.length > 1) {
        return (
            <div>
                <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
                    {props.countries.map(entry => 
                    <li key={entry.numericCode}>
                        {entry.name} <CountryButton entry={entry} setQuery={props.setQuery} />
                    </li>)
                    }
                </ul>
            </div>
        )
    }

    if (props.countries.length === 1) {
        return (
            <div>
                <h2>{props.countries[0].name}</h2>
                <p>capital: {props.countries[0].capital}</p>
                <p>population: {props.countries[0].population}</p>
                <h3>Languages</h3>
                <ul>
                {props.countries[0].languages.map(entry =>
                    <li key={entry.iso639_1}>
                        {entry.name}
                    </li>)
                }
                </ul>
                <img src={props.countries[0].flag} alt={props.countries[0].name}
                widht='100' height='100'/>
            </div>
        )
    }

    return (
        null
    )
}

export default ShowCountries