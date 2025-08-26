import React, { useState } from 'react'
import JobColumns from './JobColumns';

const JobManager = () => {
    const [jobs, setJobs] = useState([]);
    const [activity, setActivity] = useState('');
    const [categories, setCategories] = useState('');
    const [status, setStatus] = useState([]);

    const addJob = (e) => {
        e.preventDefault();
        const newJob = { activity, categories, status };
        setJobs(prevJobs => [...prevJobs, newJob]);

        setActivity('');
        setCategories('');
        setStatus('');
    };


    return (
        <div>
            <form onSubmit={addJob}>
                <input type='text' placeholder='Enter Job' value={activity} onChange={(e) => setActivity(e.target.value)} />
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value=''>Select Status</option>
                    <option value='Need to Complete'>Need to Complete</option>
                    <option value='In Progress'>In Progress</option>
                    <option value='Completed'>Completed</option>
                </select>
                <button type='submit'>Add Job</button>
            </form>
            <div className='job-columns'>
                <JobColumns title='Need to Complete' status='Need to Complete' jobs={jobs} />
                <JobColumns title='In Progress' status='In Progress' jobs={jobs} />
                <JobColumns title='Completed' status='Completed' jobs={jobs} />
            </div>

        </div>
    );
};

export default JobManager;