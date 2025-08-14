import React from 'react'

const AddJob = ({
  newJobName = '', 
  setNewJobName =() => {}, 
  newJobStatus = 'open',
  setNewJobStatus = () => {},
  handleAddJob = ()=> {},
  error,
  isEditing
 }) => {
  return (
    <div style={{marginTop:'20px', marginLeft:'25px'}}>
      <input type='text' placeholder='Enter Job Name' value={newJobName} onChange={(e) => setNewJobName(e.target.value)}/>
      <select value={newJobStatus} onChange={(e) => setNewJobStatus(e.target.value)}>
        <option value={'open'}>Open</option>
        <option value={'closed'}>Closed</option>
      </select>

      <button style={{marginLeft:'15px', marginBottom:'10px'}} onClick={handleAddJob}>
        {isEditing ? 'Save Change' : 'Add New Job'}
        </button>

       {error && <p style={{color: 'red'}}>{error}</p>}
    </div>
  )
}

export default AddJob

////// Default value for props to prevent crashes.
  // newJobName = '', 
  // setNewJobName =() => {}, 
  // newJobStatus = 'open',
  // setNewJobStatus = () => {},
  // handleAddJob = ()=> {}
