import React from 'react'

const JobColumns = ({ title, status, jobs }) => {
  const filteredJobs = jobs.filter(job => job.status === status)
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {filteredJobs.map((job, index) => (
          <div key={index}>{job.activity}</div>
        ))}
      </ul>
    </div>
  );
};

export default JobColumns;