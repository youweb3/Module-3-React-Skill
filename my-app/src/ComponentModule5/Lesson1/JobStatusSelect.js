import React from 'react'

export const JobStatusSelect = ({jobStatus, setJobStatus}) => {
    return (
        <div className="form-group">
            <label>Job Status:</label>
            <select className="job-status" value={jobStatus} onChange={(e) => setJobStatus(e.target.value)}>
                <option value='Pending'>Pending</option>
                <option value='In Progress'>In Progress</option>
                <option value='Completed'>Completed</option>
            </select>
            <p>select Status: {jobStatus}</p>
        </div>
    )
}
