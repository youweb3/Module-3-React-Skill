import React from 'react'

const AddJob = ({newJobName, setNewJobName, newJobStatus, setNewJobStatus, handleAddJob}) => {
  return (
    <div>
      <input type='text' placeholder='Enter Job Nmae' value={newJobName} onChange={(e) => setNewJobName(e.target.value)}/>
      <select value={newJobStatus} onChange={(e) => setNewJobStatus(e.target.value)}>
        <option value={'open'}>Open</option>
        <option value={'closed'}>Closed</option>
      </select>

      <button onClick={handleAddJob}>Add New Job</button>

    </div>
  )
}

export default AddJob