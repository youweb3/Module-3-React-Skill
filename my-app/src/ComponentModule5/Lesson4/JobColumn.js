import React from 'react'
import JobItem from './JobItem'

const columnStyle = {
    border: "solid 2px green",
    margin: "10px",
    padding: "10px",
    width: "300px",
    display: "inline-block",
    backgroundColor: "#f0f0f0",
    texAlighn: "center",
}

const JobColumn = ({jobs, updateJobStatus, deleteJob}) => {
    return (
        <div style={columnStyle}>
            <ul>
                {jobs.map((job) =>(

                    <JobItem key={job.id}
                    job={job}
                    deleteJob={deleteJob}
                    updateJobStatus={updateJobStatus}
                    />
                ))}

            </ul>
        </div>
    )
}

export default JobColumn