import React, { useState } from 'react'
import JobColumn from './JobColumn'
import './Main.css';
import AddJobForm from './AddJobForm';

const MainJob = () => {
    const [jobs, setJobs] = useState([
        { id: 1, title: 'A', status: 'Need to Start' },
        { id: 2, title: 'B', status: 'In Progress' },
        { id: 3, title: 'C', status: 'Completed' },
    ]);

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

            <AddJobForm onAddJob={(newJob) => setJobs(prev => [...prev, newJob])}/>

            <div className='job-columns-container'>
                <JobColumn
                    title='Need to Start'
                    image="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg"
                    alt='Job Image'
                    jobs={jobs.filter(job => job.status === 'Need to Start')}
                    onMoveJob={handleMoveJob}
                />

                <JobColumn
                    title='In progress'
                    jobs={jobs.filter(job => job.status === 'In Progress')}
                    onMoveJob={handleMoveJob}
                />


                <JobColumn
                    title='Completed'
                    jobs={jobs.filter(job => job.status === 'Completed')}
                    onMoveJob={handleMoveJob}
                />

            </div>
        </div>
    )
}

export default MainJob

