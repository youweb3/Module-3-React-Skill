import React from "react";


// TicketInfo component to display information about each ticket status
// Props:
// - image: image related to the status (e.g., completedImg)
// - result: the status string to determine background color ("completed", "in-progress", "failed")
// - children: the text passed between the component tags (e.g., "completed")
// - count: number of tickets for that status
const TicketInfo = ({ image, result, children, count }) => {
//// Variable to store background color based on the status (result)
  let bgColor ='';
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

  return (
    // Container div styled as a card
    <div
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
    </div>
  );
};

export default TicketInfo;
