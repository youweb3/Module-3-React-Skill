import React, { useState } from 'react';

const containerStyle = {
  display: "flex",
  alignItems: "center",
};

const inputStyle = {
  marginRight: "5px",
  padding: "4px 6px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  flex: "1",
};

const buttonStyle = {
  margin: "0 3px",
  fontSize: "14px",
  backgroundColor: "#7e789dff",
  color: "white",
  borderRadius: "5px",
  cursor: "pointer",
  padding: "4px 8px",
};

const JobEdit = ({ job, handleEdit, cancelEdit }) => {
    const [tempTitle, setTempTitle] = useState(job.title);//for editing job title
      const [tempDescription, setTempDescription] = useState(job.description);
    return (
        <div style={containerStyle}>
            <input
                type='text'
                value={tempTitle}
                onChange={(e) => setTempTitle(e.target.value)}
                style={inputStyle}
                placeholder="Edit job title"
            />
            <input
            type='text'
            value={tempDescription}
            onChange={(e) => setTempDescription(e.target.value)}
            style={inputStyle}
            placeholder="Edit job description"
            />

            <button onClick={() => handleEdit(job.id, tempTitle)} style={buttonStyle}>Save</button>
            <button onClick={cancelEdit} style={buttonStyle}>Cancel</button>

        </div>
    )
}

export default JobEdit;

// tempTitle is only used to keep the value inside the input,
// so changes are made locally before saving to the main state.

// When Save is clicked, handleEdit from the parent component (JobManagement)
// is called, and the new title is applied to the main state.

// Cancel just clears the edit state (sets editJob to null) and hides the input.

// In JobItem, you just need to import JobEdit and show it
// only when editJob === job.id
