import React, { useState } from "react";

const Lesson4StateAndHandling = () => {
  console.log("Component Rendered");

  const [inputValue, setInputValue] = useState("");// State for current input field value (string)
  const [submit, setSubmit] = useState([]);// // State for list of submitted items (array of strings)
  const [error, setError] = useState("");// State for error messages (string)

  // Update inputValue as user types
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

// Handle submission: validate input and add to submit array
  const handleAdd = () => {
    if (inputValue.length < 5) {
      setError(" Input must be at least 5 character long.");
      return; //stop here if invalid
    }
    console.log("Submitted:", inputValue);

    // Add new inputValue to submit array by creating a new array with existing items plus new one
    setSubmit([...submit, inputValue]); //creat new array
    setInputValue("");//// clear input field after submission
    setError("");//// clear error after successful submit
  };


  // Reset input and submitted list
  const handleReset = () => {
    setInputValue("");
    setSubmit([]);
  };
  return (
    <div style={{ border: "solid 1px black", margin: "10px", padding: "10px" }}>
      <h1>Lesson 4:Working with state and Handling User Values</h1>
      
      {/* Input field controlled by inputValue state */}
      <input
        type="text"
        onChange={handleInputChange}
        value={inputValue}
      ></input>

       {/* Button to submit current input value */}
      <button onClick={handleAdd}>Submit</button>

       {/* Button to submit current input value */}
      <button onClick={handleReset}>Reset</button>

        {/* Conditional rendering: show error message if error state is truthy */}
      {error && (
        <p style={{ color: "red" }}>
          Character count: {inputValue.length} {error}
        </p>
      )}

      
      {/* Render the submitted values as a list */}
      <ul>
        {submit.map((value, index) => (
            // JSX <li> elements created for each item in submit array
            // key={index} helps React identify each item uniquely
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Lesson4StateAndHandling;

// submit.map(...)
// Loops through the submit array and creates an <li> element for each string in the array. 
// This returns an array of JSX <li> elements that React renders inside the <ul>.

// JSX <li> is syntactic sugar for React.createElement('li', { key: index }, value) under the hood.

// The key prop on <li> helps React track each item for efficient updates.

// The error && <p>...</p> syntax means:
// If error is a non-empty string (truthy), then render the <p> with the error message; otherwise, render nothing.