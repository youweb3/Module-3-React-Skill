import React from 'react'

//// Default value for props to prevent crashes.
const JobItem = ({job = {id:0, name: 'Unknown', status: 'unknown'}, onDeleteJob = () => {} }) => {
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

//job = { id: 0, name: "Unknown", status: "unknown" } causes default information to be displayed if no job is given.
//onDeleteJob = () => {} also prevents an error if the function is not given.