import React from 'react'
import JobCard from './JobCard';

const JobColumns = ({ title, status, jobs, onEdit, onDropJob }) => {
  // Filter jobs that match this column's status
  const filteredJobs = jobs.filter(job => job.status === status)

  return (
    <div className='job-column'
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        const id = e.dataTransfer.getData('id');
        onDropJob(id, status);
      }}
    >
      <h2>{title}</h2>

      {filteredJobs.map((job, index) => (
        <JobCard key={index} job={job} onEdit={() => onEdit(index)} />
      ))}

    </div>
  );
};

export default JobColumns;