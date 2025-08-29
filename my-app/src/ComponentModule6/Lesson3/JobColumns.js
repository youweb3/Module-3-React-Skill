import React from 'react'
import JobCard from './JobCard';

const JobColumns = ({ title, status, jobs, onEdit, onDropJob, onDelete }) => {
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

      {filteredJobs.map((job) => (
        <JobCard key={job.id} job={job} onEdit={() => onEdit(job.id)} onDelete={() => onDelete(job.id)} />
      ))}

    </div>
  );
};

export default JobColumns;