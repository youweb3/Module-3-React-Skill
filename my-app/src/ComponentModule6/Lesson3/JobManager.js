import React, { useState } from 'react'
import JobColumns from './JobColumns';

const JobManager = () => {
    const [jobs, setJobs] = useState([]);
    const [activity, setActivity] = useState('');
    const [categories, setCategories] = useState([]);
    const [status, setStatus] = useState('');

    const categoriesList = ["Read Emails", "Send Emails", "Web Parsing"];

    const addJob = (e) => {
        e.preventDefault();
        if (!activity || !status) return;
        const newJob = { activity, categories, status };
        setJobs(prevJobs => [...prevJobs, newJob]);

        setActivity('');
        setCategories([]);
        setStatus('');
    };

    const handleCategoryChange = (cat) => {
        if (categories.includes(cat)) {
            setCategories(categories.filter(c => c !== cat));
        } else {
            setCategories([...categories, cat]);
        }
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
                <JobColumns title='Need to Complete' status='Need to Complete' jobs={jobs} />
                <JobColumns title='In Progress' status='In Progress' jobs={jobs} />
                <JobColumns title='Completed' status='Completed' jobs={jobs} />
            </div>

        </div>
    );
};

export default JobManager;