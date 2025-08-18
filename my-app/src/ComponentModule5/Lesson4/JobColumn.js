import React from 'react'
import JobItem from './JobItem'

const columnStyle = {
    border: "solid 2px green",
    margin: "10px",
    padding: "10px",
    display: "inline-block",
    backgroundColor: "#f0f0f0",
    // textAlign: "center",
}

const JobColumn = ({ jobs, updateJobStatus, deleteJob, editJob, setEditJob, handleEdit,title }) => {
    return (
        <div style={columnStyle}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
                const jobId = Number(e.dataTransfer.getData('jobId'));
                updateJobStatus(jobId, title);

            }}
        >
            <h3>{title}</h3>
            <ul>
                {jobs.map((job) => (

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

export default JobColumn;

//draggable → An HTML attribute on JobItem that makes the item draggable.

//onDragStart → Triggered when dragging starts; we add data like jobId to dataTransfer.

//onDragOver → Triggered when something is over a column; calling e.preventDefault() stops the browser’s default behavior so dropping is allowed.

//onDrop → Triggered when the item is dropped onto a column; we get the jobId from dataTransfer and call updateJobStatus to change the item’s status.