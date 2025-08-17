import React, { useState } from "react";

const JobForm = ({ addJob }) => {

    const [addNewJob, setAddNewJob] = useState("");// state for input field, just for hold anything type in input. function called when user click the add button

    const handleAdded = (e) => {
        e.preventDefault(); // Prevent form submission
        addJob(addNewJob);// Call the addJob function passed as a prop with the input value
        console.log('NEW job', addNewJob);
        // Reset the input field after adding the job
        setAddNewJob("");
    };

    return (
        <form>
            <input
                style={{ padding: "5px 10px", margin: "10px" }}
                type="text"
                placeholder="Add Your Job"
                value={addNewJob}
                onChange={(e) => setAddNewJob(e.target.value)}
            />
            <button
                type="button"
                onClick={handleAdded}
                style={{ padding: "5px 10px" }}
            >
                Add Job
            </button>
        </form>
    );
};

export default JobForm;

//job form component just for add new job, it will take the input from user and call the addJob function passed as a prop with the input value. and sent it to the parent component (JobManagement.js) to update the job list.