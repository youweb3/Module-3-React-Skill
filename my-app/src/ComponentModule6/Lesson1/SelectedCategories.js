import React from 'react'

const SelectedCategories = ({ categories }) => {
    if (categories.length === 0) return <p>No categories selected</p>;

    return (
        <div>
            {categories.map((cat) => (
                <span key={cat}
                    className='selected-category'>
                    {cat}
                </span>
            ))}
        </div>
    );
};

export default SelectedCategories;

// {categories.length > 0 ? (
//  categories.map((cat) => (
//     <span key={cat} className="selected-category">
//      {cat}
//     </span>
//  ))
// ) : (
// <p>NO categories Selected</p>
// )}