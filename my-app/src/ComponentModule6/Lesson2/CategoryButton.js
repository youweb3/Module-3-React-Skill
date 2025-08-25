import React from 'react'

const CategoryButton = ({ category, label, selectedCategory, onClick }) => {
    const isActive = selectedCategory === category;
    return (
        <div>
            <button
                type='button'
                onClick={() => onClick(category)}
                className={`button ${isActive ? category : ''}`}
            >
                {label}
            </button>
        </div>
        
    );
};

export default CategoryButton;