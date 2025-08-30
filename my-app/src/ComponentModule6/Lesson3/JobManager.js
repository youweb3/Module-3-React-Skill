import React, { useState, useEffect } from 'react'
import JobColumns from './JobColumns';
import JobForms from './JobForms';
import SearchJobs from './SearchJobs';
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

    const [searchItem, setSearchItem] = useState('') //state for search input

    //Load from localStorage on first render
    useEffect(() => {
        const savedJobs = localStorage.getItem('jobs-module6/3');
        if (savedJobs) setJobs(JSON.parse(savedJobs));

    }, []);

    //Save to localStorage whenever jobs change
    useEffect(() => {
        if (jobs.length > 0) {
            localStorage.setItem('jobs-module6/3', JSON.stringify(jobs));
        } else {
            localStorage.removeItem("jobs-module6/3");
        }
    }, [jobs]);

    // Function to add a new job when form is submitted
    const addJob = (e) => {
        e.preventDefault(); // prevent page reload
        if (!activity || !status) return;// Simple validation: ignore if activity or status is empty


        //Update job when editing
        // - We use job.id === editingIndex to find the correct job
        // - Replace its fields with the latest values from state (activity, categories, status)
        // - We spread [...categories] to make sure a fresh array is saved (avoid mutating state directly)
        // - If editingIndex is null, we create a new job with a unique id (Date.now())
        if (editingIndex !== null) {
            const updatedJobs = jobs.map((job) =>
                job.id === editingIndex
                    ? { ...job, activity: activity, categories: [...categories], status: status, }
                    : job
            );
            setJobs(updatedJobs);
            setEditingIndex(null);

        } else {// Create a new job object
            const newJob = {
                id: Date.now(),
                activity,
                categories,
                status,
                createdAt: new Date().toISOString() // Job creation time
            };
            setJobs(prevJobs => [...prevJobs, newJob]);// Add the new job to the jobs array
        }

        setActivity('');
        setCategories([]);
        setStatus('');
    };

    const handleEdit = (id) => {
        const job = jobs.find((i) => i.id === id);
        setActivity(job.activity);
        setCategories(job.categories);
        setStatus(job.status);
        setEditingIndex(id);
    };

    // Handle drop event: update job status after drag-and-drop
    // We use job.id instead of index to ensure stability.
    const handleDropJob = (id, newStatus) => {
        setJobs((prevJobs) => prevJobs.map((job) =>
            job.id === Number(id) ? { ...job, status: newStatus } : job)
        );
    };

    const searchs = jobs.filter((job) =>
        job.activity.toLowerCase().includes(searchItem.toLowerCase()) ||
        job.categories.some((cat) => cat.toLowerCase().includes(searchItem.toLowerCase()))
    );

    const deleteJob = (jobId) => {
        const confirmed = window.confirm("Are you sure you want to delete this job?");
        if (confirmed) {
            setJobs((prevJobs) => prevJobs.filter((job) => job.id !== jobId))
        }
    };

    //clear all job
    const clearAllJobs = () => {
        const confirmed = window.confirm("Are you sure you want to clear all jobs?");
        if (confirmed) {
            setJobs([]); //empty state
            localStorage.removeItem('"jobs-module6/3"');// remove localStorage
        }
    };

    return (
        <div className="job-manager">

            <JobForms
                addJob={addJob}
                activity={activity}
                setActivity={setActivity}
                categories={categories}
                setCategories={setCategories}
                status={status}
                setStatus={setStatus}
                editingIndex={editingIndex}
            />

            <SearchJobs searchItem={searchItem} setSearchItem={setSearchItem} />

            <button type="button" className="clear-all-btn" onClick={clearAllJobs}>
                Clear All Jobs
            </button>

            <div className='job-columns'>
                <JobColumns title='Need to Complete' status='Need to Complete' jobs={searchs} onEdit={handleEdit} onDropJob={handleDropJob} onDelete={deleteJob} />
                <JobColumns title='In Progress' status='In Progress' jobs={searchs} onEdit={handleEdit} onDropJob={handleDropJob} onDelete={deleteJob} />
                <JobColumns title='Completed' status='Completed' jobs={searchs} onEdit={handleEdit} onDropJob={handleDropJob} onDelete={deleteJob} />
            </div>

        </div>
    );
};

export default JobManager;


// We use `id` (not index) for drag-and-drop:
// Index can change if jobs are added/removed.
// id is stable and always points to the same job.
// This way we always update the correct job when moving between columns.