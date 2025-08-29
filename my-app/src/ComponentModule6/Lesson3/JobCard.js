import React from 'react'

const JobCard = ({ job, onEdit, onDelete }) => {
  return (
    <div className='job-card'
      draggable
      onDragStart={(e) => e.dataTransfer.setData('id', job.id)}
    >
      <h3 className='jobCard-title'>{job.activity}</h3>
      <div>
        {job.categories.map((category, i) => (
          <span key={i} className='category'>
            {category}
          </span>
        ))}
      </div>
      <button className='category' onClick={onEdit}>Edit</button>
      <button className='category' onClick={onDelete} >Delete</button>
    </div>
  )
}

export default JobCard

