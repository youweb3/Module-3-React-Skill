import React, { useState } from 'react'
import JobColumn from './JobColumn'
import './Main.css';
import AddJobForm from './AddJobForm';

const MainJob = () => {
    const [jobs, setJobs] = useState([
        { id: 1, title: 'A', status: 'Need to Start' },
        { id: 2, title: 'B', status: 'Need to Start' },
        { id: 3, title: 'C', status: 'Need to Start' },
    ]);

    const [searchJobTerm, setSearchJobTerm] = useState('');

    const handleSearch = (term) => setSearchJobTerm(term);

    const filteredJobs = jobs.filter(job => job.title.toLowerCase().includes(searchJobTerm.toLowerCase()));

    const handleMoveJob = (id) => {
        setJobs(prevJobs => prevJobs.map(job => {
            if (job.id === id) {
                if (job.status === 'Need to Start') return { ...job, status: 'In Progress' };
                if (job.status === 'In Progress') return { ...job, status: 'Completed' };
            }
            return job;
        })
        );
    };

    return (
        <div style={{border:'solid 1px red', margin:'10px', padding:'5px'}}>
            <h1>Module 5/ Lesson 3</h1>

            <input
                type="text"
                placeholder="Search Jobs"
                value={searchJobTerm}
                onChange={(e) => handleSearch(e.target.value)}
                style={{ marginBottom: '10px', padding: '5px', width: '200px' }}
            />

            <AddJobForm onAddJob={(newJob) => setJobs(prev => [...prev, newJob])}/>

            <div className='job-columns-container'>
                <JobColumn
                    title='Need to Start'
                    image="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg"
                    alt='Job Image'
                    jobs={filteredJobs.filter(job => job.status === 'Need to Start')}
                    onMoveJob={handleMoveJob}

                />

                <JobColumn
                    title='In Progress'
                    jobs={filteredJobs.filter(job => job.status === 'In Progress')}
                    onMoveJob={handleMoveJob}
                    image=''
                />


                <JobColumn
                    title='Completed'
                    jobs={filteredJobs.filter(job => job.status === 'Completed')}
                    onMoveJob={handleMoveJob}
                />

            </div>
        </div>
    )
}

export default MainJob

