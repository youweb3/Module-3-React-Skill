import React, { useState } from "react";
import "./JobStyles.css";

const JobEdit = ({ job, handleEdit, cancelEdit }) => {
  const [tempTitle, setTempTitle] = useState(job.title); //for editing job title
  const [tempDescription, setTempDescription] = useState(job.description); //for editing job description, default to empty string if no description

  const [errors, setErrors] = useState(""); // State to hold error messages

  const [successMessages, setSuccessMessages] = useState("");

  const onSave = (e) => {
    e.preventDefault(); // Prevent form submission
    if (!tempTitle || !tempDescription) {
      setErrors("Title and description cannot be empty.");
      return;
    }
    if (tempTitle.length < 6 || tempDescription.length < 6) {
      setErrors("Title and description must be at least 6 characters long.");
      return;
    }

    handleEdit(job.id, tempTitle, tempDescription);
    setErrors("");

    setSuccessMessages("Job updated successfully!");
    setTimeout(() => {
    setSuccessMessages("");
    cancelEdit(); // <-- Only call this after showing the message!
    }, 2000);
  };

  return (
    <form onSubmit={onSave} className="job-edit-container">
      <input
        type="text"
        value={tempTitle}
        onChange={(e) => setTempTitle(e.target.value)}
        placeholder="Edit job title"
        className="job-edit-input"
      />
      <input
        type="text"
        value={tempDescription}
        onChange={(e) => setTempDescription(e.target.value)}
        placeholder="Edit job description"
        className="job-edit-input"
      />
      <button type="submit" className="job-edit-button">Save</button>
      <button type="button" onClick={() => cancelEdit()} className="job-edit-button">Cancel</button>

      {errors && <p className="job-edit-error">{errors}</p>}
      {console.log("RENDER JSX SUCCESS:", successMessages)}
      {successMessages && (<p className="job-edit-success">{successMessages}</p>)}


    </form>
  );
};

export default JobEdit;

// tempTitle is only used to keep the value inside the input,
// so changes are made locally before saving to the main state.

// When Save is clicked, handleEdit from the parent component (JobManagement)
// is called, and the new title is applied to the main state.

// Cancel just clears the edit state (sets editJob to null) and hides the input.

// In JobItem, you just need to import JobEdit and show it
// only when editJob === job.id
