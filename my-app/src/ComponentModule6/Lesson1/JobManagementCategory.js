import { useState } from "react";
import './JobManagementCategory.css'

const JobManagementCategory = () => {
  const [jobDetails, setJobDetails] = useState({
    title: "",
    description: "",
    categories: [],
    location: "",
    salary: "",
  });

  const [error, setError] = useState('');

  const availableCategories = ["IT", "Design", "Marketing", "Finance"]; //

  const handleCategoryToggle = (category) => {
    const isSelected = jobDetails.categories.includes(category); //check if category available or not, true or false
    
    if (isSelected) {
      const newCategories = jobDetails.categories.filter((c) => c !== category);
      setJobDetails({ ...jobDetails, categories: newCategories });
    } else {

      if (jobDetails.categories.length >=3) {
        alert('You can only select up to 3 categories');
        return;
      }
      setJobDetails({
        ...jobDetails,
        categories: [...jobDetails.categories, category],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (jobDetails.categories.length === 0) {
      setError('Please select at least on category before sybmitting')
      return;//
    }
    setError('');
    console.log('Submitted Job Details:', jobDetails)
  }

  const handleClearCategories = (cate) => {
    setJobDetails({ ...jobDetails, categories: [] });
  };

  return (
    <div className="container">
      <h1>Module 6 / Lesson 1</h1>
      <h2>Job Management - Categories</h2>

      {availableCategories.map((cat) => {
        const isSelected = jobDetails.categories.includes(cat);
        return (
          <button
            key={cat}
            type="button"
            onClick={() => handleCategoryToggle(cat)}
            className={`category-btn ${isSelected ? 'selected' : ''}`}
          >
            {cat}
          </button>
        );
      })}

      <div>
        <h3>Selected category:</h3>
        {jobDetails.categories.length > 0 ? (
          jobDetails.categories.map((cat) => (
            <span key={cat} className="selected-category">
              {cat}
            </span>
          ))
        ) : (
          <p>NO categories Selected</p>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <button type="submit">submit</button>
        {error && <p className="error-text">{error}</p>}
      </form>

      <button type="button" onClick={() => handleClearCategories()}>Clear Categories</button>
    </div>
  );
};
export default JobManagementCategory;

// <div>
//   <h3>Selected category:</h3>

//   {(() => {
//     if (jobDetails.categories.length > 0) {
//
//       return jobDetails.categories.map((cat) => (
//         <span key={cat} style={{ marginRight: '10px' }}>{cat}</span>
//       ));
//     } else {
//
//       return <p>No categories selected</p>;
//     }
//   })()}
// </div>
