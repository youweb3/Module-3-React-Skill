import { useState } from "react";

const JobManagement = () => {
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Parse Emails', status: 'Need to Start' },
    { id: 2, title: 'SAP Extraction', status: 'In Progress' },
    { id: 3, title: 'Generate Report', status: 'Completed' }
  ]);

  const [addNewJob, setAddNewJob] = useState('');

  const handleAdded = () => {
    if (addNewJob.trim() === '') 
      // { console.log('empty');
      return;
    const newJob = {
      id: Date.now(),
      title: addNewJob,
      status: 'Need to Start'
    };
    // console.log('new job', newJob);
    
    setJobs([...jobs, newJob]);
    setAddNewJob('');
  }

  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  return (
    <div style={{ border: 'solid 2px blue', margin: '10px' }}>
      <h1>Module 5/4</h1>
      <div>
        <form>
          <input type="text" placeholder="Add Your Job" value={addNewJob} onChange={(e) => setAddNewJob(e.target.value)} />
          <button type="button" onClick={handleAdded}>Add Job</button>
        </form>
        <ul>
          {jobs.map((job) =>
            <li key={job.id}>{job.id}- {job.title} - ({job.status})
              <button onClick={() => deleteJob(job.id)}>DeleteJob</button>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default JobManagement;