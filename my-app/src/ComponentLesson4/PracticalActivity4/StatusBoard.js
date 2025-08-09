import React, { useState } from "react";
import TicketInfo from "./TicketInfo";

// Import images for each ticket status
import completedImg from "../../Images/completedImage.png";
import inProgressImg from "../../Images/inProgressImage.png";
import failedImg from "../../Images/failedImage.png";

// Define count for each status it could be dynamic later
// const completedCount = 5;
// const inProgressCount = 5;
// const failedCount = 2;
// this step instead of static constants in above we want use reacts useState for update dynamically
const StatusBoard = () => {
  //use state for counts, so we can update dynamically
  const [completedCount, setCompletedCount] = useState(5);
  const [inProgressCount, setInProgressCount] = useState(5);
  const [failedCount, setFailedCount] = useState(2);

  //step 2: creat function to add tickets to each status
  const addCompleted = () => setCompletedCount((prev) => prev + 1);
  const addInProgress = () => setInProgressCount((prev) => prev + 1);
  const addFailed = () => setFailedCount((prev) => prev + 1);

  return (
    // Main container with border and padding
    <div
      style={{
        border: "solid 1px blue",
        padding: "20px",
        margin: "10px",
      }}
    >
      <h1 style={{ backgroundColor: "blue" }}>Module 4, Lesson 1</h1>

      {/* Flex container to arrange TicketInfo components side-by-side */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {/* TicketInfo component for in-progress, completed and failed status */}
        {/* onAdd is Function pass add gunction as prop */}
        <TicketInfo
          result="in-progress"
          image={inProgressImg}
          count={inProgressCount}
          onAdd={addInProgress}
        >
          in progress
        </TicketInfo>

        <TicketInfo
          result="completed"
          image={completedImg}
          count={completedCount}
          onAdd={addCompleted}
        >
          completed
        </TicketInfo>

        <TicketInfo
          result="failed"
          image={failedImg}
          count={failedCount}
          onAdd={addFailed}
        >
          failed
        </TicketInfo>
      </div>
    </div>
  );
};

export default StatusBoard;
