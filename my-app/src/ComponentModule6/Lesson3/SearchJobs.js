import React from "react";

const SearchJobs = ({ searchItem, setSearchItem }) => {
    return (
        <div>
            <input
                type="text"
                placeholder="search by activity or category"
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
            />
        </div>
    );
};

export default SearchJobs;