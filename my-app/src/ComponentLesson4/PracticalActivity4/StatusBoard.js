import React from "react";
import TicketInfo from "./TicketInfo";

// Import images for each ticket status
import completedImg from "../../Images/completedImage.png";
import inProgressImg from "../../Images/inProgressImage.png";
import failedImg from "../../Images/failedImage.png";

// Define count for each status it could be dynamic later
const completedCount = 5;
const inProgressCount = 5;
const failedCount = 2;

const StatusBoard = () => {
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
        <TicketInfo result="in-progress" image={inProgressImg} count={inProgressCount}>
          in progress
        </TicketInfo>
        <TicketInfo result="completed" image={completedImg} count={completedCount}>
          completed
        </TicketInfo>
        <TicketInfo result="failed" image={failedImg} count={failedCount}>
          failed
        </TicketInfo>
      </div>
    </div>
  );
};

export default StatusBoard;
