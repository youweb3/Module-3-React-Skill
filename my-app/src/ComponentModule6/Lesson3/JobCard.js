import React from 'react'

const JobCard = ({job}) => {
  return (
    <div>
        <h3>{job.activity}</h3>
        <div>
            {job.categories.map((category, index) => (
                <span key={index}>
                    {category}
                </span>
            ))}
        </div>
    </div>
  )
}

export default JobCard

