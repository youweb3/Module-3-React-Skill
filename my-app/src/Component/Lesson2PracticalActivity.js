import React, { useState } from 'react';
// Import React and the useState hook from the React library.

const Lesson2PracticalActivity = () => {
    const [jobCounter, setJobCounter] = useState(0);
  // Declare a state variable called jobCounter, and a function setJobCounter to update it.
  // useState(0) sets the initial value of jobCounter to 0.

    const handleClickEvent = () => {
        setJobCounter(jobCounter + 1);
        console.log('Run Job', jobCounter + 1);
        // When the button is clicked, increase the value of jobCounter by 1.
        // setJobCounter updates the state and triggers a re-render to update the UI.
          
    };

  return (
    <div  style={{ border: 'solid 1px red', margin: '10px', padding: '10px' }}>
        <h1>Lesson 2: Practical Activity</h1>
        <h2>Job count: {jobCounter}</h2>
        <button onClick={handleClickEvent}>Click</button>
    </div>
  );
};

export default Lesson2PracticalActivity;





//////////////////////////////////////////////////////////
// without state

// const Lesson2PracticalActivity = () => {
//     let jobCount = 0;  // Regular variable (will not trigger re-render)
//     const handleAddJob = () => {
//         jobCount ++;
//         console.log('Job count:', jobCount);

//         // This won't update the displayed count because React doesn't re-render
//         // when regular variables change
//         //When the button is clicked, jobCounter is incremented and logged to the console.
        
//     }
    
//   return (
//     <div style={{border:'solid 1px red', margin:'10px', padding: '10px'}}>
//         <h1>Lesson2 Practical Activity</h1>
//         <h2>Job Counter</h2>
//         <p>current job: {jobCount}</p>
//         <button onClick={handleAddJob}>Add Job</button>
//     </div>
//   )
// }

// export default Lesson2PracticalActivity

//question??
// 1: Why doesn't the displayed job count update on the screen when we click the button?
//-- Because you are using a regular variable (let jobCounter = 0), and React doesn’t know it has changed
//-- React components re-render only when state or props change. A regular variable:
// Is re-initialized every time the component re-renders.
// Doesn’t trigger a re-render when it changes.
// So even if jobCounter++ increments the variable, React never updates the UI.

// 2: What is the difference between a regular variable and state in React?
//-- A regular variable (like let count = 0) does not cause the UI to update when it changes,
// and it resets every time the component re-renders.
// --State (created with useState) is a special variable that React remembers between renders. 
// When you update state, React automatically re-renders the component and updates the UI.
//--Use state when you want changes to be visible on the screen.

//const [count, setCount] = useState(0);
//setCount(count + 1); // Updates UI


// 3:How might we use state to solve the problem of the unchanging display?
//--By using useState, we store the job count in a state variable. 
// When we update the state using the setJobCounter function, React automatically re-renders the component,
// and the new value is displayed on the screen.

// const [jobCounter, setJobCounter] = useState(0);

// const handleClick = () => {
//   setJobCounter(jobCounter + 1);
// };
