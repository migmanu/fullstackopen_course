import React, { useState, useEffect } from 'react';
import axios from 'axios'
import SearchBar from './components/SearchBar'
import ShowCountries from './components/ShowCountries'
import './App.css';


function App() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('https://restcountries.eu/rest/v2/name/')


  useEffect(() => {
    axios
      .get(query)
      .then(response => {
        setCountries(response.data)
      }).catch(err => {
        if (err.response && err.response.status === 404) {
          console.clear()
          setCountries([])
        }
      })
  }, [query])


  const handleSearch = (event) => {
    setSearch(event.target.value)
    setQuery('https://restcountries.eu/rest/v2/name/' + event.target.value)
  }


  return (
    <div>
      <h1>
        Data for countries App
      </h1>
      <SearchBar search={search} handleSearch={handleSearch} />
      <ShowCountries countries={countries} setCountries={setCountries} setQuery={setQuery}/>
    </div>
  );
}


export default App;
