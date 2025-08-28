import React from "react";

const JobForms = ({addJob, activity, setActivity, status, setStatus, categories, setCategories, editingIndex}) => {

    // List of available categories for checkboxes
    const categoriesList = ["Read Emails", "Send Emails", "Web Parsing"];

    // Function to handle checkbox changes for categories
    const handleCategoryChange = (cat) => {
        if (categories.includes(cat)) {
            // if category is already selected, remove it
            setCategories(categories.filter((c) => c !== cat));
        } else {
            // if category not selected, add it
            setCategories([...categories, cat]);
        }
    };

    return (
        <form onSubmit={addJob}>
            <input
                type="text"
                placeholder="Enter Job"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
            />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="">Select Status</option>
                <option value="Need to Complete">Need to Complete</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>

            {/* Checkboxes for multiple categories */}
            <div>
                <p>Select Categories:</p>
                {categoriesList.map((cat) => (
                    <label key={cat}>
                        <input
                            type="checkbox"
                            value={cat}
                            checked={categories.includes(cat)}
                            onChange={() => handleCategoryChange(cat)}
                        />
                        {cat}
                    </label>
                ))}
            </div>
            <button type="submit">{editingIndex !== null ? "Update Job" : "Add Job"}</button>
        </form>
    );
};

export default JobForms;
