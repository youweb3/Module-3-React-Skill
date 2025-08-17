import { useState } from "react";
import JobColumn from "./JobColumn";
import JobForm from "./JobForm";

const JobManagement = () => {
  const [jobs, setJobs] = useState([
    { id: 1, title: "Parse Emails", status: "Need to Start" },
    { id: 2, title: "SAP Extraction", status: "In Progress" },
    { id: 3, title: "Generate Report", status: "Completed" },
  ]);

  const [editJob, setEditJob] = useState(null);//null means no job is being edited
  // Update the job title
  const handleEdit = (id, newTitle) => {// newTitle is the updated title in input field
    setJobs(jobs.map(job => job.id === id ? { ...job, title: newTitle } : job));
    setEditJob(null);
  }

  // Add a new job
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
    <div style={{ border: "solid 2px blue", margin: "10px",}}>
      <h1>Module 5/4</h1>

      <JobForm addJob={addJob} />

      <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
        <JobColumn
          title="Need to Start"
          deleteJob={deleteJob}
          updateJobStatus={updateJobStatus}
          jobs={jobs.filter(job => job.status === "Need to Start")}
          editJob={editJob}
          setEditJob={setEditJob}
          handleEdit={handleEdit}
        />

        <JobColumn
          title="In Progress"
          deleteJob={deleteJob}
          updateJobStatus={updateJobStatus}
          jobs={jobs.filter(job => job.status === "In Progress")}
          editJob={editJob}
          setEditJob={setEditJob}
          handleEdit={handleEdit}
        />

        <JobColumn
          title="Completed"
          deleteJob={deleteJob}
          updateJobStatus={updateJobStatus}
          jobs={jobs.filter(job => job.status === "Completed")}
          editJob={editJob}
          setEditJob={setEditJob}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
};

export default JobManagement;
