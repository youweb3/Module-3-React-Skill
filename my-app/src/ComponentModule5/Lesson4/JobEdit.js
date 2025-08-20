import React, { useState } from 'react';
import './JobStyles.css';

const JobEdit = ({ job, handleEdit, cancelEdit }) => {
  const [tempTitle, setTempTitle] = useState(job.title);//for editing job title
  const [tempDescription, setTempDescription] = useState(job.description);
  return (
    <div className="job-edit-container">
      <input
        type='text'
        value={tempTitle}
        onChange={(e) => setTempTitle(e.target.value)}
        placeholder="Edit job title"
        className='job-edit-input'
      />
      <input
        type='text'
        value={tempDescription}
        onChange={(e) => setTempDescription(e.target.value)}
        placeholder="Edit job description"
        className='job-edit-input'
      />

      <button onClick={() => handleEdit(job.id, tempTitle)} className='job-edit-button'>Save</button>
      <button onClick={cancelEdit} className='job-edit-button'>Cancel</button>

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
