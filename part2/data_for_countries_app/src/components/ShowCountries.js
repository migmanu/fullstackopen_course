import React from 'react'
import CountryButton from './CountryButton'
import ShowOneCountry from './ShowOneCountry'
import ShowWeather from './ShowWeather'


const ShowCountries = (props) => {
    /* Takes countries array as input. 
    If array lenght > 10: returns text soliciting more filters.
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
        props.handleWeatherQuery()
        return (
            <div>
                <ShowOneCountry country={props.countries[0]} />
                <ShowWeather weather={props.weather} setWeather={props.setWeather} 
                capital={props.countries[0].capital} />
            </div>
        )
    }

    return (
        <div>
            No match found
        </div>
    )
}

export default ShowCountries