import React from "react";
import './JobForm.css';
const JobForm = () => {
  return (
    <form className="job-form">
      <div className="form-group">
        <label>Job Title</label>
        <input type="text" className="job-title" placeholder="Enter Job Title" />
      </div>

      <div className="form-group">
        <label>Job Category:</label>
        <div className="category-buttons">
          <button type='button' className="category-btn">Emails</button>
          <button type='button' className="category-btn">Parsing</button>
          <button type='button' className="category-btn">Send Emails</button>
        </div>
      </div>

      <div className="form-group">
        <label>Job Status:</label>
          <select className="job-status">
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
      </div>

      <button type="submit" className="submit-btn">Add Job</button>
    </form>
  );
};

export default JobForm;
