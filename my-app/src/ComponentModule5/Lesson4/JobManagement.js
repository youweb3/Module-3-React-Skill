import { useState } from "react";
import JobColumn from "./JobColumn";
import JobForm from "./JobForm";

const JobManagement = () => {
  const [jobs, setJobs] = useState([
    { id: 1, title: "Parse Emails", status: "Need to Start" },
    { id: 2, title: "SAP Extraction", status: "In Progress" },
    { id: 3, title: "Generate Report", status: "Completed" },
  ]);

  const addJob = (title) => {
    if (title.trim() === "")
      // { console.log('empty');
      return;
    const newJob = {
      id: Date.now(),
      title,
      status: "Need to Start",
    };
    // console.log('new job', newJob);

    setJobs([...jobs, newJob]);
  };

  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  const updateJobStatus = (id, newStatus) => {
    // console.log('JOB ID', id, 'is:', newStatus);
    setJobs(
      jobs.map((job) => (job.id === id ? { ...job, status: newStatus } : job))
    );
  };

  return (
    <div style={{ border: "solid 2px blue", margin: "10px" }}>
      <h1>Module 5/4</h1>
      <div>

        <JobForm addJob={addJob}/>

        <JobColumn
          title="Need to Start"
          deleteJob={deleteJob}
          updateJobStatus={updateJobStatus}
           jobs={jobs.filter(job => job.status === "Need to Start")}
        />

        <JobColumn
          title="In Progress"
          deleteJob={deleteJob}
          updateJobStatus={updateJobStatus}
          jobs={jobs.filter(job => job.status === "In Progress")}
        />

        <JobColumn
          title="Completed"
          deleteJob={deleteJob}
          updateJobStatus={updateJobStatus}
          jobs={jobs.filter(job => job.status === "Completed")}
        />
      </div>
    </div>
  );
};

export default JobManagement;
