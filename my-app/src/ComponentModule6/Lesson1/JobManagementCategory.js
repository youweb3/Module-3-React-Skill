
import useCategorySelection from "./useCategorySelection";
import './JobManagementCategory.css'
import JobForm from "./JobForm";
import SearchForm from "./SearchForm";
import JobCategory from "./JobCategory";
import SelectedCategories from './SelectedCategories';

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


  const handleSubmit = (jobData) => {

    if (categories.length === 0) {
      setError('Please select at least on category before submitting')
      return;//
    }
    setError('');
    console.log('Submitted Job Details:', jobData)
  };

  return (

    <div className="container">
      <h1>Module 6 / Lesson 1</h1>
      <h2>Job Management - Categories</h2>

      <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <JobCategory
        categories={categories}
        filteredCategories={filteredCategories}
        handleCategoryToggle={handleCategoryToggle}
      />

      <h3>Selected category:</h3>
      <SelectedCategories categories={categories} />

      <JobForm categories={categories} onSubmit={handleSubmit} />

      {error && <p className="error-text">{error}</p>}

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
