import React, { useState, useEffect } from 'react';
import axios from 'axios'
import SearchBar from './components/SearchBar'
import ShowCountries from './components/ShowCountries'
import './App.css';


const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('https://restcountries.eu')
  const [ weather, setWeather] = useState({})
  const api_key = process.env.REACT_APP_API_KEY
  const [ weatherQuery, setWeatherQuery] = useState(`http://api.weatherstack.com/current?access_key=${api_key}&query=Paris`)
 
  useEffect(() => {
    axios
      .get(query)
      .then(response => {
        setCountries(response.data)
      }).catch(err => {
        if (err.response && err.response.status === 404) {
          setCountries([])
        }
      })
  }, [query])

  
  useEffect(() => {
    axios
      .get(weatherQuery)
      .then(response => {
        setWeather(response.data) 
      }).catch(err => {
      })
  }, [weatherQuery, api_key]);


  const handleSearch = (event) => {
    setSearch(event.target.value)
    setQuery('https://restcountries.eu/rest/v2/name/' + event.target.value)
  }

  const handleWeatherQuery = () => {
    const new_weather_query = `http://api.weatherstack.com/current?access_key=${api_key}&query=${countries[0].capital}`
    setWeatherQuery(new_weather_query)
  }


  return (
    <div>
      <h1>
        Data for countries App
      </h1>
      <SearchBar search={search} handleSearch={handleSearch} />
      <ShowCountries countries={countries} setQuery={setQuery} weather={weather} 
      handleWeatherQuery={handleWeatherQuery} />
    </div>
  );
}


export default App;
