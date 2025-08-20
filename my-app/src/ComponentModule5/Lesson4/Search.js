import React from 'react'
import './JobStyles.css';

const Search = ({ searchItem, setSearchItem }) => {
    return (
        <input
            type='text'
            placeholder='Search Job...'
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            className='job-search'
        />

    );
};

export default Search;