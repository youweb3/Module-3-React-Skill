import React, { useState } from "react";

const JobForm = ({ addJob }) => {

    const [addNewJob, setAddNewJob] = useState({// Initialize state to hold job details
        title: "",
        description: "",
        priority: ""
    });

    const [error, setError] = useState(''); // State to hold error messages

    const handleAdded = (e) => {
        e.preventDefault(); // Prevent form submission

        // Validate that all fields are filled
        if (!addNewJob.title || !addNewJob.description || !addNewJob.priority) {
            setError("Please fill in all fields");
            return; // Exit if any field is empty
        }


        addJob(addNewJob);// Pass the whole object//Call the addJob function passed as a prop with the new job details
        console.log('NEW job', addNewJob);

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
                style={{ padding: "5px 10px", margin: "10px" }}
                type="text"
                name="title"
                placeholder="Job Title"
                value={addNewJob.title}
                onChange={handleInputChange}
            />
            <input
                style={{ padding: "5px 10px", margin: "10px" }}
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
                style={{ padding: "5px 10px", margin: "5px" }}
                >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>

            <button type="submit" style={{ padding: "5px 10px", marginLeft:'13px' }}>
                Add Job
            </button>

             {error && <p style={{ color: 'red', marginLeft:'15px' }}>{error}</p>} {/* Display error message if any */}
        </form>
    );
};

export default JobForm;

//job form component just for add new job, it will take the input from user and call the addJob function passed as a prop with the input value. and sent it to the parent component (JobManagement.js) to update the job list.