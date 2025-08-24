import React from 'react'

const SearchForm = ({ searchTerm, setSearchTerm, categories}) => {
    return (
        <div>
            <input className="search-item"
                type="text"
                placeholder="Search Category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    )
}

export default SearchForm