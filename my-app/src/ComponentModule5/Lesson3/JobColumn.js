import React from 'react'
import './JobColumn.css';

const JobColumn = ({title, image, alt, jobs, onMoveJob}) => {
    
  return (
    <div className='job-column'>
        <h1>{title}</h1>
        {image && <img src={image} alt={alt || title}/>}
        <ul>
            {jobs && jobs.map((job) => (
                <li key={job.id}>
                  {job.title}
                  {job.status !== 'Completed' && (
                  <button type='button' onClick={() => onMoveJob(job.id)}>Next</button>
                  )}
                </li>
            ))}
        </ul>
    </div>
  );
};

export default JobColumn