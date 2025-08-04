import { useState } from "react";

const Lesson3UseState = () => {
  // Declare a state variable "jobCounter" initialized to 0,
  // and "setJobCounter" is a function to update this state.
  // This is how React manages state in function components.
  const [jobCounter, setJobCounter] = useState(0);


  // Function to add a job (increment the count)
  // We use setJobCounter to tell React to update state and re-render.
  // Directly modifying jobCounter (like jobCounter++) won't update the UI.
  const handleClickEvent = () => {
    // if (jobCounter < 10) { // used the conditiona hear that how many job availble we can remove it the condition. and jus put "setJobCounter(jobCounter + 1);" in handlefunction.
    //   setJobCounter(jobCounter + 1);
    // }
    setJobCounter(jobCounter + 1);  // Update state properly
    console.log("Run Job,", jobCounter);//This logs the old value because state updates are async
  };



  //// Function to subtract a job, prevent negative values (not below 0)
  const handleSubEvent = () => {
    if (jobCounter > 0) {
      setJobCounter(jobCounter - 1); // update state properly
    }
  };

  //Function to reset job count to zero
  const handleResetEvent = () => {
    setJobCounter(0); //Reset state to zero
  };


  //Conditional message — needs to be outside event handlers
  // let message = ''; ////Start with empty message
  // if(jobCounter === 0){ //// Set message here
  //   message = 'No jobs Available';
  // } else if (jobCounter <= 5) {
  //   message = `Few jobs Available: (${jobCounter})`; //// Change message again here
  // } else {
  //   message = `Jobs Available is (${jobCounter})`; /////Change message again here
  // }

  /////////////////////////////////////////////
  //conditional message based on current jobCounter value.
  //Notice here we use "const" becuse we assign message once.
  //Using "const" means we wont reaasign message variable later.
  //If you wanted to reassign message multuple times, use "let" instead
  const message =
    jobCounter === 0
      ? "No jobs Available"
      : jobCounter <= 5
      ? `Few jobs Available: (${jobCounter})`
      : `Jobs Available is (${jobCounter})`;

  return (
    <div style={{ border: "solid 1px red", margin: "10px", padding: "10px" }}>
      <h1>Lesson 3: Use State</h1>
      <p>
        Add state to a function component. Its returns an array with two values:
        -The current state and the function to update. -The hook takes an
        initial state as an argument and returns an updated state value whenever
        the setter function is called. it can be used like this:
        <br></br>
        const [state, setState] = useState(initiaValue);.
      </p>

      <h1>Running Job Today is: {jobCounter}</h1>
      <p>{message}</p>
      <button onClick={handleClickEvent}>Create a Job</button>
      <button onClick={handleSubEvent}>Remove a Job</button>
      <button onClick={handleResetEvent}>Reset a Job</button>
      

      <h1>Running Job Today in UAT: {Math.max(jobCounter - 5, 0)}</h1>

      <p>
        What can useState hold?<br></br>
        useState can store any type of value where is the state in a class
        component is limited to being an object.
      </p>
    </div>
  );
};

export default Lesson3UseState;
