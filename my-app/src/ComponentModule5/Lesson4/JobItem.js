import React from "react";
import JobEdit from "./JobEdit";
import './JobStyles.css';

const JobItem = ({ job, deleteJob, updateJobStatus, editJob, setEditJob, handleEdit }) => {

    return (
        <li className="job-item"
            draggable
            onDragStart={(e) => e.dataTransfer.setData('jobId', job.id)}
        >

            {editJob === job.id ? (

                <JobEdit
                    job={job}
                    handleEdit={handleEdit}
                    cancelEdit={() => setEditJob(null)}
                />

            ) : (
                <>
                    {job.id}:<strong>{job.title}</strong>- {job.description} ({job.status})

                    <div className="job-actions">
                        < select
                            className="job-select"
                            value={job.status}
                            onChange={(e) => updateJobStatus(job.id, e.target.value)}
                        >
                            <option value="Need to Start">Need to Start</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>

                        <button className="job-button" onClick={() => deleteJob(job.id)}>

                            <img
                                src="https://openclipart.org/image/800px/325437"
                                alt="delete"
                                style={{ width: "15px", height: "15px", marginRight: "3px" }}
                            />
                            DeleteJob
                        </button>
                        <button className="job-button" onClick={() => setEditJob(job.id)}>Edit</button>
                    </div>
                </>
            )}
        </li>
    );
};

export default JobItem;

// When editJob === job.id, the JobEdit component is displayed, allowing you to edit the job title.

// Clicking Cancel just calls setEditJob(null), which hides the input.

// Clicking Save calls handleEdit to apply the changes to the main state.