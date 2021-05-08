import React from 'react'

const SearchBar = (props) => {
    return (
        <div>
            find countries <input value={props.search} onChange={props.handleSearch}>
      </input>
        </div>

    )
}

export default SearchBar