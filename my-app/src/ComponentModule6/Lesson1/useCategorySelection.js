import { useState } from 'react'

const useCategorySelection = () => {

    const [categories, setCategories] = useState([]);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const availableCategories = ["IT", "Design", "Marketing", "Finance"]; //

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

    const handleSubmit = (e) => {
        e.preventDefault();

        if (categories.length === 0) {
            setError('Please select at least one category before submitting')
            return;
        }
        setError('');
        console.log('Submitted Job Details:', categories);
    }

    const handleClearCategories = (cate) => {
        setCategories([]);
    };

    const filteredCategories = availableCategories.filter(cat =>
        cat.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
        categories,
        error,
        setError,
        searchTerm,
        handleSubmit,
        setSearchTerm,
        handleCategoryToggle,
        handleClearCategories,
        filteredCategories
    };
}

export default useCategorySelection