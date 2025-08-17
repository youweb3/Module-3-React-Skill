import React from 'react'
import JobItem from './JobItem'

const columnStyle = {
    border: "solid 2px green",
    margin: "10px",
    padding: "10px",
    display: "inline-block",
    backgroundColor: "#f0f0f0",
    textAlighn: "center",
}

const JobColumn = ({jobs, updateJobStatus, deleteJob, editJob, setEditJob, handleEdit}) => {
    return (
        <div style={columnStyle}>
            <ul>
                {jobs.map((job) =>(

                    <JobItem
                    key={job.id}
                    job={job}
                    deleteJob={deleteJob}
                    updateJobStatus={updateJobStatus}
                    editJob={editJob}
                    setEditJob={setEditJob}
                    handleEdit={handleEdit}
                    />
                ))}

            </ul>
        </div>
    )
}

export default JobColumn