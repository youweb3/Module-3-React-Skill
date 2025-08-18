import React from 'react'

const Search = ({ searchItem, setSearchItem }) => {
    return (
        <input
            type='text'
            placeholder='Search Job...'
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            style={{ margin: "10px", padding: "5px", width: "200px" }}
        />

    );
};

export default Search;