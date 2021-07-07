import React from 'react';

const ShowWeather = (props) => {
    /* 
    Access data in weather State and displays info to browser
    */

    return (
        <div>
            <h3>Weather in {props.capital}</h3>
            <p><b>Temperature:</b> {props.weather.current.temperature} Celsius</p>
            <img src={props.weather.current.weather_icons[0]} alt='weather icon' />
            <p><b>Wind:</b> {props.weather.current.wind_speed} mph {props.weather.current.wind_dir} </p>
        </div>
    )


}

export default ShowWeather