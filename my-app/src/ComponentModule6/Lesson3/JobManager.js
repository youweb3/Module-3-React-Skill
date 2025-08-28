import React, { useState } from 'react'
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


    // Function to add a new job when form is submitted
    const addJob = (e) => {
        e.preventDefault(); // prevent page reload
        if (!activity || !status) return;// Simple validation: ignore if activity or status is empty

        if (editingIndex !== null) {
            const updatedJobs = [...jobs];
            updatedJobs[editingIndex] = { ...updatedJobs[editingIndex], activity, categories, status };
            setJobs(updatedJobs);
            setEditingIndex(null);

        } else {// Create a new job object
            const newJob = {
                id: Date.now(),
                activity,
                categories,
                status
            };
            setJobs(prevJobs => [...prevJobs, newJob]);// Add the new job to the jobs array
        }

        setActivity('');
        setCategories([]);
        setStatus('');
    };

    const handleEdit = (index) => {
        const job = jobs[index];
        setActivity(job.activity);
        setCategories(job.categories);
        setStatus(job.status);
        setEditingIndex(index);
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
            />

            <SearchJobs searchItem={searchItem} setSearchItem={setSearchItem}/>


            <div className='job-columns'>
                <JobColumns title='Need to Complete' status='Need to Complete' jobs={searchs} onEdit={handleEdit} onDropJob={handleDropJob} />
                <JobColumns title='In Progress' status='In Progress' jobs={searchs} onEdit={handleEdit} onDropJob={handleDropJob} />
                <JobColumns title='Completed' status='Completed' jobs={searchs} onEdit={handleEdit} onDropJob={handleDropJob} />
            </div>

        </div>
    );
};

export default JobManager;


// We use `id` (not index) for drag-and-drop:
// Index can change if jobs are added/removed.
// id is stable and always points to the same job.
// This way we always update the correct job when moving between columns.