import React, { useState } from "react";

const CategorySelector = () => {
    const [selectCategory, setSelectCategory] = useState("");// useState hook to store the selected category (initially empty)

    // Define styles for each category button
    const categoryStyles = {
        readEmail: { backgroundColor: "orange" },
        sendEmail: { backgroundColor: "yellow" },
        webParsing: { backgroundColor: "blue" },
        default: { backgroundColor: "white" },
    };

    // Define user-friendly labels for categories
    const categoryLabels = {
        readEmail: "Read Emails",
        sendEmail: "Send Emails",
        webParsing: "Web Parsing",
    };

    // Function to check if a category is selected
    const validateCategory = (category) => {
        return selectCategory === category;
    };

    const handleCategoryClick = (category) => {
        setSelectCategory(category);
    };

    return (
        <div style={{ border: '1px solid red', margin: '10px', padding: '10px'}}>
            <h1>Module 6 / Lesson 2</h1>

            <button
                type="button"
                // when clicked, update state to "readEmail"
                onClick={() => handleCategoryClick('readEmail')}
                // style changes depending on whether this category is selected
                style={validateCategory('readEmail') ? categoryStyles.readEmail : categoryStyles.default}>
                Read Email
            </button>

            <button
                type="button"
                onClick={() => handleCategoryClick('sendEmail')}
                style={validateCategory('sendEmail') ? categoryStyles.sendEmail : categoryStyles.default} >
                Send Email
            </button>

            <button
                type="button"
                onClick={() => handleCategoryClick('webParsing')}
                style={validateCategory('webParsing') ? categoryStyles.webParsing : categoryStyles.default}>
                Web Parsing
            </button>


            {/* Show the selected category if there is one */}
            <div>
                {selectCategory && (
                    <p style={{ marginTop: "10px", fontWeight: "bold" }}>
                        You selected: {categoryLabels[selectCategory]}
                    </p>
                )}
            </div>

        </div>
    );
};

export default CategorySelector;
