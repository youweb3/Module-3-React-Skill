import React, { useState } from "react";
import CategoryButton from "./CategoryButton";
import './CategorySelector.css';

const CategorySelector = () => {
    const [selectCategory, setSelectCategory] = useState("");// useState hook to store the selected category (initially empty)

    // Define user-friendly labels for categories
    const categoryLabels = {
        readEmail: "Read Emails",
        sendEmail: "Send Emails",
        webParsing: "Web Parsing",
    };


    const handleCategoryClick = (category) => {
        setSelectCategory(category);
    };

    return (
        <div style={{ border: '1px solid red', margin: '10px', padding: '10px' }}>
            <h1>Module 6 / Lesson 2</h1>

            <div className="button-container">
                {Object.keys(categoryLabels).map((key) => (
                    <CategoryButton
                        key={key}
                        category={key}
                        label={categoryLabels[key]}
                        selectedCategory={selectCategory}
                        onClick={handleCategoryClick}
                    />
                ))}
            </div>



            {/* Show the selected category if there is one */}
            <div>
                {selectCategory && (
                    <p style={{ marginTop: "10px", fontWeight: "bold" }}>
                        You selected: {categoryLabels[selectCategory]}
                    </p>
                )}
            </div>

            <button
                type="button"
                onClick={() => handleCategoryClick('')}>
                Reset
            </button>

        </div>
    );
};

export default CategorySelector;
