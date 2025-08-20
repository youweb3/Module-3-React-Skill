import { useState, useEffect } from "react";
import JobColumn from "./JobColumn";
import JobForm from "./JobForm";
import Search from "./Search";
import JobList from "./JobList";
import "./JobStyles.css";

const JobManagement = () => {
  // const [jobs, setJobs] = useState([
  //   { id: 1, title: "Parse Emails", status: "Need to Start" },
  //   { id: 2, title: "SAP Extraction", status: "In Progress" },
  //   { id: 3, title: "Generate Report", status: "Completed" },
  // ]);
  const [jobs, setJobs] = useState(() => { // we use lazy initialization to load jobs from localStorage just read it once when the component mounts
    const savedJobs = localStorage.getItem("jobs");
    return savedJobs ? JSON.parse(savedJobs) : [
      { id: 1, title: "Parse Emails", status: "Need to Start" },
      { id: 2, title: "SAP Extraction", status: "In Progress" },
      { id: 3, title: "Generate Report", status: "Completed" },
    ];
  });
  // useEffect to update localStorage whenever jobs change
  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);// Whenever jobs change, update localStorage with the new jobs array

  const [searchItem, setSearchItem] = useState('');// state for search input, just for hold anything type in input

  // state for edit job, null means no job is being edited
  const [editJob, setEditJob] = useState(null);
  // Update the job title
  const handleEdit = (id, newTitle, newDescription) => {// newTitle is the updated title in input field
    setJobs(jobs.map(job => job.id === id ? { ...job, title: newTitle, description: newDescription } : job));
    setEditJob(null);
  }

  // Add a new job
  const addJob = (newJob) => {
    const jobWithId = { ...newJob, id: Date.now(), 
      status: "Need to Start" }; // Assign a unique ID and default status
    // console.log('new job', newJob);
    setJobs([...jobs, jobWithId]); // Add the new job to the jobs array
  };

  // Delete a job
  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  //update job status
  const updateJobStatus = (id, newStatus) => {
    // console.log('JOB ID', id, 'is:', newStatus);
    setJobs(
      jobs.map((job) => (job.id === id ? { ...job, status: newStatus } : job))
    );
  };

  return (
    <div style={{ border: "solid 2px blue", margin: "10px", }}>
      <h1>Module 5/4</h1>

      <JobForm addJob={addJob} />
      <div className="job-management-container">

        <Search searchItem={searchItem} setSearchItem={setSearchItem} />
        
        <JobList jobs={jobs}/>
        <div></div>
        <JobColumn
          title="Need to Start"
          deleteJob={deleteJob}
          updateJobStatus={updateJobStatus}
          jobs={jobs
            .filter(job => job.status === "Need to Start")
            .filter(job => job.title.toLowerCase().includes(searchItem.toLowerCase()))
          }
          editJob={editJob}
          setEditJob={setEditJob}
          handleEdit={handleEdit}
        />

        <JobColumn
          title="In Progress"
          deleteJob={deleteJob}
          updateJobStatus={updateJobStatus}
          jobs={jobs
            .filter(job => job.status === "In Progress")// filter jobs by status
            .filter(job => job.title.toLowerCase().includes(searchItem.toLowerCase()))// filter jobs by search input
          }
          editJob={editJob}
          setEditJob={setEditJob}
          handleEdit={handleEdit}
        />

        <JobColumn
          title="Completed"
          deleteJob={deleteJob}
          updateJobStatus={updateJobStatus}
          jobs={jobs
            .filter(job => job.status === "Completed")
            .filter(job => job.title.toLowerCase().includes(searchItem.toLowerCase()))
          }
          editJob={editJob}
          setEditJob={setEditJob}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
};

export default JobManagement;


//Lazy Initialization means that instead of giving a state its initial value directly, you provide a function that returns the initial value. This function is called only once, on the first render.

//Simple example:

// Without lazy
//const [count, setCount] = useState(expensiveComputation());

// With lazy
//const [count, setCount] = useState(() => expensiveComputation());


//The difference is:
//In the first case, expensiveComputation() runs every render, even if it’s not needed.
//With lazy initialization, the function runs only once when the state is first created.
//In our localStorage example:
//We don’t want to read localStorage.getItem("jobs") on every render.
//We just want to read it once, when the state is initialized.