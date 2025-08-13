import React from 'react'

const JobItem = ({job, onDeleteJob}) => {
  return (
    <div>
        <li>
         {job.id}- <em>{job.name}- ({job.status})- </em>
         <button onClick={() => {onDeleteJob(job.id)}}>Delete Job</button>
        </li>
    </div>
  )
}

export default JobItem