import React from "react";
import JobEdit from "./JobEdit";

const jobItemStyle = {
    listStyleType: "none",
    marginBottom: "8px",
    padding: "5px",
    borderBottom: "1px solid #a8b3dfff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
};

const buttonStyle = {
    margin: "0 3px",
    fontSize: "14px",
    backgroundColor: "#7e789dff",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
    padding: "3px 6px",
    display: "flex",
    alignItems: "center",
};

const selectStyle = {
    margin: "0 5px",
    padding: "3px",
    borderRadius: "4px",
};

const JobItem = ({ job, deleteJob, updateJobStatus, editJob, setEditJob, handleEdit }) => {

    return (
        <li style={jobItemStyle}>
            {editJob === job.id ? (

                <JobEdit
                    job={job}
                    handleEdit={handleEdit}
                    cancelEdit={() => setEditJob(null)}
                />

            ) : (
                <>
                    {job.id} - {job.title} - ({job.status})

                    < select
                        value={job.status}
                        onChange={(e) => updateJobStatus(job.id, e.target.value)}
                        style={selectStyle}
                    >
                        <option value="Need to Start">Need to Start</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>

                    <button onClick={() => deleteJob(job.id)} style={buttonStyle}>

                        <img
                            src="https://openclipart.org/image/800px/325437"
                            alt="delete"
                            style={{ width: "15px", height: "15px", marginRight: "3px" }}
                        />
                        DeleteJob
                    </button>
                    <button onClick={() => setEditJob(job.id)} style={buttonStyle}>Edit</button>
                </>
            )}
        </li>
    );
};

export default JobItem;

// When editJob === job.id, the JobEdit component is displayed, allowing you to edit the job title.

// Clicking Cancel just calls setEditJob(null), which hides the input.

// Clicking Save calls handleEdit to apply the changes to the main state.