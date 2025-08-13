import React from "react";
import JobItem from "./JobItem";

const JobList = ({ jobs, onDeleteJob }) => {
  return (
    <div>
      <ul>
        {jobs.map((job) => (
         <JobItem key={job.id} job={job} onDeleteJob={onDeleteJob}/>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
