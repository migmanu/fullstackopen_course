import React from 'react'


const CountryButton = (props) => {
    /* React component with input «entry» and «setQuery». When handler onClick
    triggered sets state «query» to that of selected country. Returns button. 
     */
    
    const handleQuery = () => {
        /* I don't know if this is appropriate to have in component, 
        but could't find working alternative */
        const newQuery = 'https://restcountries.eu/rest/v2/name/' + props.entry.name
        props.setQuery(newQuery)
      }

    return (
        <button onClick={handleQuery}>Show</button>
    )
}


export default CountryButton