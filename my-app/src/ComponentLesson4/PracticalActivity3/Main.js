import React, { useState } from 'react'
import JobList from './JobList';
import AddJob from './AddJob';

const Main = () => {
    // Initial job list
    const[jobs, setJobs] = useState([
        {id:1, name:'Frontend Developer', status:'open'},
        {id:2, name:'Backend Developer', status:'closed'},
        {id:3, name:'Fullstack Developer', status:'open'}
    ]);

    // const [addNewJob, setAddNewJob] = useState({id:'', name:'', status: ''});
/////////////////////////////////////////////
    // State for the new job's name and status
    //newJobName only stores the input text of the name.
    //newJobStatus only stores the select value of the status.
    //Advantage: Easier state control and less clutter, especially when the ID itself is automatically generated.
  const [newJobName, setNewJobName] = useState('');
  const [newJobStatus, setNewJobStatus] = useState('open'); // default status

  const [error, setError] = useState(''); //error state
  const [editingJobId, setEditingJobId] = useState(null); // state for edit 
  const [message, setMessage] = useState (''); //state for edit message

  // Add a new job to the list
    const handleDeleteJob = (id) => {
        // Using prevJobs callback to make sure we always have latest state
        setJobs(prevJobs => prevJobs.filter(job => job.id !== id));
        // setJobs(jobs.filter((job) => job.id !==id));
    };

    //Add New job
    const handleAddJob = () => {
        if (newJobName.trim() === '') {
            setError ('Job name cannot be empty!')
            return; //Prevent adding empty names
        }
        setError('');

        if(editingJobId !==null) {
            //editing existing job
            setJobs(prevJobs => prevJobs.map(job => 
                job.id === editingJobId
                ? {...job, name: newJobName, status: newJobStatus}
                :job)
            );
            setMessage('Job updated successfully!');
            setEditingJobId(null); //exit edit mode
        } else{
            //Auto-generate the next ID
            const nextId = jobs.length > 0 ? Math.max(...jobs.map(j => j.id)) + 1 : 1;
            setJobs(prevJobs => [...prevJobs, {id: nextId, name: newJobName, status: newJobStatus}]);//Add the new job to the list
            setMessage('Job added successfully!');
        }

        //Reset the input fields
        setNewJobName('');
        setNewJobStatus('open'); // reset to default

        //show message
        setTimeout(() => setMessage(''), 3000);
    }

       const handleEditJob = (job) => {
        setNewJobName(job.name);
        setNewJobStatus(job.status);
        setEditingJobId(job.id);
        setMessage('Editing mode activated!');
        setTimeout(() => setMessage(''), 1000);
    };

    // const handleAddJob = () =>{
    //     if( 
    //      addNewJob.id.trim() !== '' &&
    //      addNewJob.name.trim() !== '' &&
    //      addNewJob.status.trim() !== ''
    // ) {
    //     // setJobs([...jobs, {...addNewJob, id: Number(addNewJob.id)}]);
    //     setJobs(prevJobs => [...prevJobs,{...addNewJob, id: Number(addNewJob.id)}]);
    //     setAddNewJob({id:'', name:'', status:''});
    // }
    // }

  return (
    <div style={{border:'solid 2px black', paddingLeft: '10px', margin:'10px'}}>
        <h1>Module 4/ Lesson 3</h1>

        {message && <div style={{color:'green', margin:'10px 0'}}>{message}</div>}

        <JobList jobs={jobs} onDeleteJob={handleDeleteJob} onEditJob={handleEditJob}/>

       <AddJob
        newJobName={newJobName}
        setNewJobName={setNewJobName}
        newJobStatus={newJobStatus}
        setNewJobStatus={setNewJobStatus}
        handleAddJob={handleAddJob}
        error={error}
        isEditing ={editingJobId !== null}// pass edit mode
       />

        {/* <input type='number' placeholder='Enter ID here' value={addNewJob.id} onChange={(e) => setAddNewJob({...addNewJob, id: e.target.value})}/> */}
        {/* <input type='text' placeholder='Enter Status here' value={addNewJob.status} onChange={(e) => setAddNewJob({...addNewJob, status: e.target.value})}/> */}

    </div>
  )
}

export default Main

// prevJobs always has the latest state
// Number(addNewJob.id) is good because input type="number" returns a string, so we convert it to a number
// The rest of the code stays the same.
//////////////////////////////////

//nextId → automatically generates a unique ID based on the highest current ID
//newJobStatus with <select> → user can only choose between open or closed, preventing invalid status.
//prevJobs callback → ensures that even if multiple updates happen quickly, no job is lost.
//Resetting input fields → after adding a job, the form clears for the next entry.