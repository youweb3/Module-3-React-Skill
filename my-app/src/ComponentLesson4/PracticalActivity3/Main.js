import React, { useState } from 'react'
import JobList from './JobList';

const Main = () => {
    const[jobs, setJobs] = useState([
        {id:1, name:'Frontend Developer', status:'open'},
        {id:2, name:'Backend Developer', status:'closed'},
        {id:3, name:'Fullstack Developer', status:'open'}
    ]);

    const [addNewJob, setAddNewJob] = useState({id:'', name:'', status: ''});

    const handleDeleteJob = (id) => {
        setJobs(jobs.filter((job) => job.id !==id));
    };

    const handleAddJob = () =>{
        if( 
         addNewJob.id.trim() !== '' &&
         addNewJob.name.trim() !== '' &&
         addNewJob.status.trim() !== ''
    ) {
        // setJobs([...jobs, {...addNewJob, id: Number(addNewJob.id)}]);
        setJobs(prevJobs => [...prevJobs,{...addNewJob, id: Number(addNewJob.id)}]);
        setAddNewJob({id:'', name:'', status:''});
    }
    }

  return (
    <div style={{border:'solid 2px black', paddingLeft: '10px', margin:'10px'}}>
        <h1>Module 4/ Lesson 3</h1>

        <JobList jobs={jobs} onDeleteJob={handleDeleteJob}/>
        <input type='number' placeholder='Enter ID here' value={addNewJob.id} onChange={(e) => setAddNewJob({...addNewJob, id: e.target.value})}/>
        <input type='text' placeholder='Enter Name here' value={addNewJob.name} onChange={(e) => setAddNewJob({...addNewJob, name: e.target.value})}/>
        <input type='text' placeholder='Enter Status here' value={addNewJob.status} onChange={(e) => setAddNewJob({...addNewJob, status: e.target.value})}/>
         <button onClick={handleAddJob}>Add New Job</button>

    </div>
  )
}

export default Main

// prevJobs always has the latest state
// Number(addNewJob.id) is good because input type="number" returns a string, so we convert it to a number
// The rest of the code stays the same.
//////////////////////////////////