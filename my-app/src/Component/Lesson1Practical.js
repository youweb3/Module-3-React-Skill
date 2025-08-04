import React, { useState } from "react";

const Lesson1Practical = () => {
  //variable to conditionally disable the button
  //const isDisabled = false; // Change to false to enable the button.

  //// useState to manage button disabled state
  const [isDisabled, setIsDisabled] = useState(false);

  //useState to toggle hove state
  const [isHovered, seIsHovered] = useState(false);

  //function to toggle isDisabled state
  const toggleDisabled = () => {
    setIsDisabled((prev) => !prev);
  };

  //Style object for heading
  const headingStyle = {
    textAlign: "center",
    color: "#2c3e50",
    backgroundColor: "#ecf0f1",
  };

  //Style Object for button
  const baseButtonStyle = {
    padding: "10px 20px",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "2px solid #2980b9",
    borderRadius: "8px",
    cursor: isDisabled ? "not-allowed" : "pointer",
    opacity: isDisabled ? 0.5 : 1,
    pointerEvents: isDisabled ? "none" : "auto",
  };

  // Hover style
  const hoverStyle = {
    backgroundColor: "#2980b9",
    color: "#e0f7fa",
  };

  // Combine styles
  const buttonStyle = {
    ...baseButtonStyle,
    ...(isHovered ? hoverStyle : {}),
  };

  return (
    <div style={{ border: "solid 1px blue", margin: "10px", padding: "10px" }}>
      <h1 style={headingStyle}>
        Style React heading with jsx style attributes
      </h1>

      <button
        style={buttonStyle}
        disabled={isDisabled}
        onClick={toggleDisabled}
        onMouseEnter={() => seIsHovered(true)}
        onMouseLeave={() => seIsHovered(false)}

      >{isDisabled ? "Disabled (Click to Enable)" : "Enabled (Click to Disable)"}
      </button>
    </div>
  );
};

export default Lesson1Practical;
