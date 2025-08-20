import React from 'react'
import './JobStyles.css';

const JobList = ({jobs}) => {
  return (
    <div className='job-lists'>
        <h2>Job List:</h2>
        <ul>
            {jobs.map((job) => (
                <li key={job.id}>
                    <strong>{job.title}</strong> - {job.description} (Priority: {job.priority})
                </li>
            ))}
        </ul>
    </div>
  );
};

export default JobList;