import React, { useState } from 'react'
import JobColumns from './JobColumns';
import './JobManager.css';

const JobManager = () => {
    // State for all jobs
    const [jobs, setJobs] = useState([]);
    // State for the job's activity input
    const [activity, setActivity] = useState('');
    // State for selected categories (array)
    const [categories, setCategories] = useState([]);
    // State for job status (single choice)
    const [status, setStatus] = useState('');

    const [editingIndex, setEditingIndex] = useState(null);


    // List of available categories for checkboxes
    const categoriesList = ["Read Emails", "Send Emails", "Web Parsing"];

    // Function to add a new job when form is submitted
    const addJob = (e) => {
        e.preventDefault(); // prevent page reload
        if (!activity || !status) return;// Simple validation: ignore if activity or status is empty

        if (editingIndex !== null) {
            const updatedJobs = [...jobs];
            updatedJobs[editingIndex] = { activity, categories, status };
            setJobs(updatedJobs);
            setEditingIndex(null);
            
        } else {
            const newJob = { activity, categories, status };// Create a new job object
            setJobs(prevJobs => [...prevJobs, newJob]);// Add the new job to the jobs array
        }

        setActivity('');
        setCategories([]);
        setStatus('');
    };

    // Function to handle checkbox changes for categories
    const handleCategoryChange = (cat) => {
        if (categories.includes(cat)) { // if category is already selected, remove it
            setCategories(categories.filter(c => c !== cat));
        } else {  // if category not selected, add it
            setCategories([...categories, cat]);
        }
    };

    const handleEdit = (index) => {
        const job = jobs[index];
        setActivity(job.activity);
        setCategories(job.categories);
        setStatus(job.status);
        setEditingIndex(index);
    };


    return (
        <div className="job-manager">
            <form onSubmit={addJob}>
                <input type='text' placeholder='Enter Job' value={activity} onChange={(e) => setActivity(e.target.value)} />
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value=''>Select Status</option>
                    <option value='Need to Complete'>Need to Complete</option>
                    <option value='In Progress'>In Progress</option>
                    <option value='Completed'>Completed</option>
                </select>

                {/* Checkboxes for multiple categories */}
                <div>
                    <p>Select Categories:</p>
                    {categoriesList.map((cat) => (
                        <label key={cat}>
                            <input type='checkbox'
                                value={cat}
                                checked={categories.includes(cat)}
                                onChange={() => handleCategoryChange(cat)}
                            >
                            </input>
                            {cat}
                        </label>
                    ))}
                </div>
                <button type='submit'>Add Job</button>
            </form>
            <div className='job-columns'>
                <JobColumns title='Need to Complete' status='Need to Complete' jobs={jobs} onEdit={handleEdit} />
                <JobColumns title='In Progress' status='In Progress' jobs={jobs} onEdit={handleEdit}/>
                <JobColumns title='Completed' status='Completed' jobs={jobs} onEdit={handleEdit}/>
            </div>

        </div>
    );
};

export default JobManager;