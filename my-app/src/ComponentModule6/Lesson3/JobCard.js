import React from 'react'

const JobCard = ({job}) => {
  return (
    <div className='job-card'>
        <h3 className='jobCard-title'>{job.activity}</h3>
        <div>
            {job.categories.map((category, index) => (
                <span key={index} className='category'>
                    {category}
                </span>
            ))}
        </div>
    </div>
  )
}

export default JobCard

