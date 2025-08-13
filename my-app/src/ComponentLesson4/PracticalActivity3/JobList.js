import React from "react";
import JobItem from "./JobItem";

// JobList now has default values for props to prevent crashes
const JobList = ({ jobs =[], onDeleteJob = () => {} }) => {
  //If jobs is empty, display a message
  if (!jobs.length) return <p>No jobs available</p>;
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


// Safety check: Before rendering the list of jobs, we ensure that the `jobs` prop exists.
// This prevents runtime errors (crashes) in case `jobs` is undefined or null.
// It's a common pattern in React to avoid trying to map over undefined values.