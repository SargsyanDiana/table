import React from "react";

export default function SearchInput(props) {
    const {searchQuery, handleInputChange, name} = props

return <input
    name={name}
    autoComplete="off"
    className='placeholder-white'
    type="text"
    value={name === searchQuery.name ? searchQuery.value : ''}
    onChange={handleInputChange}
    placeholder="Search..."
/>
}