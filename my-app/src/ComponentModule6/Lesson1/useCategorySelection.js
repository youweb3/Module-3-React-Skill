import { useState } from 'react'

const useCategorySelection = (
    availableCategories = ["IT", "Design", "Marketing", "Finance"]
) => {

    const [categories, setCategories] = useState([]);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    //select / remove category
    const handleCategoryToggle = (category) => {
        const isSelected = categories.includes(category);

        if (isSelected) {
            const newCategories = categories.filter((c) => c !== category);
            setCategories(newCategories);
        } else {

            if (categories.length >= 3) {
                alert('You can only select up to 3 categories');
                return;
            }
            setCategories([...categories, category]);
        }
    };

     //remove all category
    const handleClearCategories = (cate) => {
        setCategories([]);
    };

    //search inside category
    const filteredCategories = availableCategories.filter(cat =>
        cat.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
        categories,
        error,
        setError,
        searchTerm,
        setSearchTerm,
        handleCategoryToggle,
        handleClearCategories,
        filteredCategories,
    };
};

export default useCategorySelection;