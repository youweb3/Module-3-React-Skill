import React from "react";

export const JobTitleInput = ({jobTitle, setJobTitle}) => {
  return (
    <div className="form-group">
      <label>Job Title</label>
      <input
        type="text"
        className="job-title"
        placeholder="Enter Job Title"
        value={jobTitle}
        onChange={(e) => {
          setJobTitle(e.target.value);
          console.log("Job Title:", e.target.value);
        }}
      />
      <p>Current Title: {jobTitle}</p>
    </div>
  );
};
