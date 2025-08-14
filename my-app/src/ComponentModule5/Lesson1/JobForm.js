import React, { useState } from "react";
import "./JobForm.css";
import { JobTitleInput, JobCategoryButtons, JobStatusSelect, SubmitButton } from '../../ComponentModule5/Lesson1';

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

       <JobTitleInput jobTitle={jobTitle} setJobTitle={setJobTitle}/>

       <JobCategoryButtons jobCategory={jobCategory} setJobCategory={setJobCategory}/>

       <JobStatusSelect jobStatus={jobStatus} setJobStatus={setJobStatus}/>
       
       <SubmitButton/>
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