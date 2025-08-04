import React, { useState } from "react";

const Lesson1Practical = () => {
  //variable to conditionally disable the button
  //const isDisabled = false; // Change to false to enable the button.

  //// useState to manage button disabled state
  const [isDisabled, setIsDisabled] = useState(false); //Starts with the button enabled (false means NOT disabled).

  //useState to toggle hove state
  const [isHovered, seIsHovered] = useState(false); //Tracks if mouse is over the button or not.

  //function to toggle isDisabled state
  const toggleDisabled = () => {
    setIsDisabled((prev) => !prev); //Flips isDisabled between true and false every time you click the button.
    // /If isDisabled was true, this makes it false.
    // /If isDisabled was false, this makes it true
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
    backgroundColor: "#c6f421ff",
    color: "#011316ff",
  };

  // Combine styles
  const buttonStyle = {
    ...baseButtonStyle,
    ...(isHovered ? hoverStyle : {}), //If isHovered is true, add hoverStyle. Otherwise, add nothing ({})”/
  };

  return (
    <div
      style={{
        border: "solid 1px blue",
        margin: "10px",
        padding: "10px",
        backgroundColor: "red",
      }}
    >
      <h1>Lesson 1: practical</h1>
      <h2 style={headingStyle}>
        Style React heading with jsx style attributes
      </h2>

      <button
        style={buttonStyle}
        onClick={toggleDisabled} //// Toggle disabled
        onMouseEnter={() => seIsHovered(true)} ///Hover start
        onMouseLeave={() => seIsHovered(false)} ///Hover end
      >
        {isDisabled
          ? "Disabled (Click to Enable)"
          : "Enabled (Click to Disable)"}
      </button>
    </div>
  );
};

export default Lesson1Practical;
