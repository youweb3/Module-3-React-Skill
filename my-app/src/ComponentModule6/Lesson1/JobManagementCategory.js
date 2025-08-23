import { useState } from "react";

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
      setJobDetails({
        ...jobDetails,
        categories: [...jobDetails.categories, category],
      });
    }
  };

  const handleSubmit = (e) =>{
    e.preventDefault();

    if (jobDetails.categories.length === 0) {
      setError('Please select at least on category before sybmitting')
      return;//
    }
    setError('');
    console.log('Submitted Job Details:', jobDetails)
  }

  return (
    <div style={{ border: "solid 2px green", margin: "10px", padding: "10px" }}>
      <h1>Module 6 / Lesson 1</h1>
      <h2>Job Management - Categories</h2>

      {availableCategories.map((cat) => {
        const isSelected = jobDetails.categories.includes(cat);
        const buttonStyle = isSelected
          ? { backgroundColor: "green", color: "white", margin: "3px" }
          : { color: "black", margin: "3px" };

        return (
          <button
            key={cat}
            type="button"
            onClick={() => handleCategoryToggle(cat)}
            style={buttonStyle}
          >
            {cat}
          </button>
        );
      })}

      <div>
        <h3>Selected category:</h3>
        {jobDetails.categories.length > 0 ? (
          jobDetails.categories.map((cat) => (
            <span key={cat} style={{ marginRight: "10px" }}>
              {cat}
            </span>
          ))
        ) : (
          <p>NO categories Selected</p>
        )}
      </div>

          <form onSubmit={handleSubmit}>
        <button type="submit">submit</button>
        {error && <p>{error}</p>}
      </form>
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
