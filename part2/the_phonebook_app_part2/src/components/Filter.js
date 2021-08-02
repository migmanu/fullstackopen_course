import React from 'react'

const Filter = (props) => {
    return(
        <div>
            Filter contacts by name: <input value={props.search}
            onChange={props.handleSearch}/>
        </div>
    )
}

export default Filter