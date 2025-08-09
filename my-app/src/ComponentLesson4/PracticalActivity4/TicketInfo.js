import React, { useState } from "react";

// TicketInfo component to display information about each ticket status
// Props:
// - image: image related to the status (e.g., completedImg)
// - result: the status string to determine background color ("completed", "in-progress", "failed")
// - children: the text passed between the component tags (e.g., "completed")
// - count: number of tickets for that status
const TicketInfo = ({ image, result, children, count, onAdd }) => {
  // State to track if details are shown or hidden
  const [showDetails, setShowDetails] = useState(false);

  //// Variable to store background color based on the status (result)
  let bgColor = "";
  switch (result) {
    case "completed":
      bgColor = "lightgreen"; //// Light green for completed status
      break;
    case "in-progress":
      bgColor = "khaki"; // Khaki color for in-progress status
      break;
    case "failed":
      bgColor = "red"; // Red color for failed status
      break;
    default:
      bgColor = "white"; // Default white background if status unknown
  }

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
    //Here, prev is the previous value of showDetails (either true or false).
    //If prev was false, !prev is true, so it switches from hidden to shown.
    //If prev was true, !prev is false, so it switches from shown to hidden.
  };

  return (
    // Container div styled as a card
    <div
      onClick={toggleDetails}
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        margin: "10px",
        width: "150px",
        textAlign: "center",
        borderRadius: "8px",
        backgroundColor: bgColor,
      }}
    >
      {/* Display the status image */}
      <img src={image} alt={children} width="50" />
      {/* Display the status text passed as children */}
      <h3>{children}</h3>
      {/* Display the count of tickets */}
      <p>Count: {count}</p>

      {/* Show this extra info only if showDetails is true */}
      {showDetails && (
        <div style={{ marginTop: "10px", fontSize: "14px", color: "#333" }}>
          <p>More details about {children} tickets...</p>
          {/* Here we can add actual details or a list later */}
        </div>
      )}

      {/* Add Ticket Button */}
      <button onClick={(event)=>{
        event.stopPropagation();//// Prevent toggleDetails when clicking button
        onAdd(); //call the add ticket function
      }}
      style={{ marginTop: "10px" }}>
        Add Ticket
      </button>
    </div>
  );
};

export default TicketInfo;

///click event for shows more datails:
//If we want to show different details for each status,we can pass those details as a prop from the parent (StatusBoard) to each TicketInfo,
// or define them inside TicketInfo based on the result prop.
//For example, inside TicketInfo, you could do something like:

// const detailsMap = {
//   completed: "All tickets completed successfully.",
//   in-progress: "Tickets are currently being worked on.",
//   failed: "Tickets that failed need attention.",
// };

// ...

// {showDetails && (
//   <div style={{ marginTop: "10px", fontSize: "14px", color: "#333" }}>
//     <p>{detailsMap[result]}</p>
//   </div>
// )}

//////////////////////////////////////////
// Or, you can pass a details prop from StatusBoard when rendering each TicketInfo

// {/* <TicketInfo
//       result="completed"
//       image={completedImg}
//       count={completedCount}
//       details="This status shows all completed tickets."
// >
//   completed
// </TicketInfo> */}

// Then inside TicketInfo, render details instead of the generic text:
// {showDetails && (
//   <div style={{ marginTop: "10px", fontSize: "14px", color: "#333" }}>
//     <p>{details}</p>
//   </div>
// )}
//////////////////////////////////////////////////////
