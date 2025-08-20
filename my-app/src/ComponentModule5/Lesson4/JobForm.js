import React, { useState } from "react";
import "./JobStyles.css";

const JobForm = ({ addJob }) => {

    const [addNewJob, setAddNewJob] = useState({// Initialize state to hold job details
        title: "",
        description: "",
        priority: ""
    });

    const [error, setError] = useState(''); // State to hold error messages

    const [successMessage, setSuccessMessage] = useState(''); // State to hold success messages

    // Function to handle form submission
    const handleAdded = (e) => {
        e.preventDefault(); // Prevent form submission

        // Validate that all fields are filled
        if (!addNewJob.title || !addNewJob.description || !addNewJob.priority) {
            setError("Please fill in all fields");
            return; // Exit if any field is empty
        }


        if (addNewJob.title.length < 6) {
            setError("Title must be at least 6 characters long");
            return;
        }
        // Validate that the title is at least 3 characters long
        if (addNewJob.description.length < 6) {
            setError("Description must be at least 6 characters long");
            return; // Exit if description is too short
        }


        addJob(addNewJob);// Pass the whole object//Call the addJob function passed as a prop with the new job details
        console.log('NEW job', addNewJob);
        setSuccessMessage("Job added successfully!"); // Set success message
        setTimeout(() => setSuccessMessage(''), 3000); // Clear success message after 3 seconds

        setAddNewJob({ title: '', description: '', priority: '' });  // Reset the input field after adding the job
        setError(''); // Clear any previous error messages
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddNewJob({
            ...addNewJob, [name]: value,// update the jobDetails state with the new input value
        });
    };

    return (
        <form onSubmit={handleAdded}>
            <input
                type="text"
                name="title"
                placeholder="Job Title"
                value={addNewJob.title}
                onChange={handleInputChange}
                className="job-form-input"
            />
            <input
                className="job-form-input"
                type="text"
                name="description"
                placeholder="Job Description"
                value={addNewJob.description}
                onChange={handleInputChange}
            />
            <select
                name="priority"
                value={addNewJob.priority}
                onChange={handleInputChange}
                className="job-form-select"
            >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>

            <button type="submit" className="job-form-button">Add Job</button>

            {error && <p className="job-form-error">{error}</p>} {/* Display error message if any */}
            {successMessage && <p className="job-form-success">{successMessage}</p>} {/* Display success message if any */}
        </form>
    );
};

export default JobForm;

//job form component just for add new job, it will take the input from user and call the addJob function passed as a prop with the input value. and sent it to the parent component (JobManagement.js) to update the job list.