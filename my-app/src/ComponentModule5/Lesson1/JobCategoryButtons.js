import React from "react";

export const JobCategoryButtons = ({ jobCategory, setJobCategory }) => {
    return (
        <div className="form-group">
            <label>Job Category:</label>
            <div className="category-buttons">
                <button
                    type="button"
                    className="category-btn"
                    onClick={() => {
                        setJobCategory("Emails");
                        console.log("selected category:", "Emails");
                    }}
                >
                    Emails
                </button>
                <button
                    type="button"
                    className="category-btn"
                    onClick={() => setJobCategory("Parsing")}
                >
                    Parsing
                </button>
                <button
                    type="button"
                    className="category-btn"
                    onClick={() => setJobCategory("Send Emails")}
                >
                    Send Emails
                </button>
            </div>
            <p>Selected Caregory: {jobCategory}</p>
        </div>
    );
};
