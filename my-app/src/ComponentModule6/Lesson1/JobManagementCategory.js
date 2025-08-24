import { useState } from "react";
import useCategorySelection from "./useCategorySelection";
import './JobManagementCategory.css'

const JobManagementCategory = () => {
  const {
    categories,
    error,
    setError,
    searchTerm,
    setSearchTerm,
    handleCategoryToggle,
    handleClearCategories,
    filteredCategories
  } = useCategorySelection();

  const [jobDetails, setJobDetails] = useState({
    title: "",
    description: "",
    location: "",
    salary: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (categories.length === 0) {
      setError('Please select at least on category before submitting')
      return;//
    }
    setError('');

    const SubmittedJob = {...jobDetails, categories };
    console.log('Submitted Job Details:', SubmittedJob)
  }

  return (
    <div className="container">
      <h1>Module 6 / Lesson 1</h1>
      <h2>Job Management - Categories</h2>

      <input className="search-item"
        type="text"
        placeholder="Search Category..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} />

        {filteredCategories.length === 0
         ? (<p>No results found</p>)
         : (filteredCategories.map((cat) => (

            <button
              key={cat}
              type="button"
              onClick={() => handleCategoryToggle(cat)}
              className={`category-btn ${categories.includes(cat) ? 'selected' : ''}`}
            >
              {cat}
            </button>
          ))
      )}

      <div>
        <h3>Selected category:</h3>
        {categories.length > 0 ? (
          categories.map((cat) => (
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
