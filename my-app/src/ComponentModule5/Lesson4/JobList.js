import React from 'react'

const JobList = ({jobs}) => {
  return (
    <div>
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