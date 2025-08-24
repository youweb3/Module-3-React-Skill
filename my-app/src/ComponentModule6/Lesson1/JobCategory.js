import React from 'react'

const JobCategory = ({ filteredCategories, handleCategoryToggle, categories }) => {

    if (filteredCategories.length === 0) {
        return <p>No results found</p>
    }

    return (
        <div>

            {filteredCategories.map((cat) => (
                <button
                    key={cat}
                    type='button'
                    onClick={() => handleCategoryToggle(cat)}
                    className={`category-btn ${categories.includes(cat) ? 'selected' : ''}`}
                >

                    {cat}

                </button>
            ))}

        </div>
    )
}

export default JobCategory;

// category List
// {filteredCategories.length === 0
//     ? (<p>No results found</p>)
//     : (filteredCategories.map((cat) => (

//         <button
//             key={cat}
//             type="button"
//             onClick={() => handleCategoryToggle(cat)}
//             className={`category-btn ${categories.includes(cat) ? 'selected' : ''}`}>
//             {cat}
//         </button>
//     ))

//     )}

