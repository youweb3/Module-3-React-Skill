import React from "react";

const jobItemStyle = {
    listStyleType: "none",
    marginBottom: "8px",
    padding: "5px",
    borderBottom: "1px solid #a8b3dfff"
}

const JobItem = ({ job, deleteJob, updateJobStatus }) => {
    return (
        <div style={jobItemStyle}>
            <li>
                {job.id}- {job.title} - ({job.status})

                <select
                    value={job.status}
                    onChange={(e) => updateJobStatus(job.id, e.target.value)}
                >
                    <option value="Need to Start">Need to Start</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>

                <button onClick={() => deleteJob(job.id)} style={{ margin: '3px', textAlign: 'center', fontSize: '15px', backgroundColor: '#7e789dff', color: 'white', borderRadius: '5px', cursor: 'pointer', }}>

                    <img
                        src="https://openclipart.org/image/800px/325437"
                        alt="delete"
                        style={{ width: "15px", height: "15px", marginRight: "3px" }}
                    />
                    DeleteJob
                </button>
            </li>
        </div>
    );
};

export default JobItem;
