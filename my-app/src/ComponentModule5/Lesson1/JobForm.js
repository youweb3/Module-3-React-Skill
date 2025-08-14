import React, { useState } from "react";
import "./JobForm.css";

const JobForm = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobCategory, setJobCategory] = useState("");
  const [jobStatus, setJobStatus] = useState("Pending");

  const[error, setError] = useState('');

  const handleSubmit = (e) => {
    //The important thing is to always prevent the page refresh with e.preventDefault()
    // in the submit handler, otherwise the form will be submitted and the page will reload.
    e.preventDefault();//Prevent the default behavior of the form (e.preventDefault())

    if(!jobTitle.trim() || !jobCategory.trim() || !jobStatus.trim()) {
      setError('Please fill all fields before submitting');
      return;
    }

    setError('');
    console.log('job Submitted:', {jobTitle, jobCategory, jobStatus});

    //reset form
    setJobTitle('');
    setJobCategory('');
    setJobStatus('Pending');
  };

  return (

    <form className="job-form" onSubmit={handleSubmit}>
       {error && <p className="error-message">{error}</p>}
      <div className="form-group">
        <label>Job Title</label>
        <input
          type="text"
          className="job-title"
          placeholder="Enter Job Title"
          value={jobTitle}
          onChange={(e) => {setJobTitle(e.target.value)
            console.log('Job Title:', e.target.value);
          }}
        />
        <p>Current Title: {jobTitle}</p>
      </div>

      <div className="form-group">
        <label>Job Category:</label>
        <div className="category-buttons">
          <button type="button" className="category-btn" onClick={()=> {setJobCategory('Emails'); console.log('selected category:', 'Emails');}}>
            Emails
          </button>
          <button type="button" className="category-btn" onClick={()=> setJobCategory('Parsing')}>
            Parsing
          </button>
          <button type="button" className="category-btn" onClick={()=> setJobCategory('Send Emails')}>
            Send Emails
          </button>
        </div>
        <p>Selected Caregory: {jobCategory}</p>
      </div>

      <div className="form-group">
        <label>Job Status:</label>
        <select className="job-status" value={jobStatus} onChange={(e) => setJobStatus(e.target.value)}>
          <option value='Pending'>Pending</option>
          <option value='In Progress'>In Progress</option>
          <option value='Completed'>Completed</option>
        </select>
        <p>select Status: {jobStatus}</p>
      </div>
      <button type="submit" className="submit-btn">
        Add Job
      </button>
    </form>
  );
};

export default JobForm;

//<form> is the container itself and onSubmit is on the form.
//<button type="submit"> inside the form → when clicked the form is triggered and handleSubmit is executed.
//This means you don't need to put onClick on the button, all submits are controlled by the form.
//Tip: Just don't forget to put e.preventDefault() inside the handler so that the page doesn't reload.

//<button type="button"> → Updates state for buttons that are only clicked.
//<button type="submit"> → To submit the form, trigger the form's onSubmit.
//Without type → the browser will consider it as submit, so be careful.