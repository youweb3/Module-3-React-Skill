import React from "react";

function Lesson1StyleAttributes() {
  const hideProperty = true;
  const attText = { textAlign: "center", color: "red" };
  return (
    <div style={{border:'solid 1px blue', margin:'10px', padding: '10px'}}>
      {/* this method disable the the property name, true active, false diactive */}
      {/* and also if we want style the property we should put in curly brackets is not accept=> style={'color: red'} */}
      <h1>Lesson 1: Style Attributes</h1>
      <h2 style={attText}>Hello World</h2>
      <button disabled={hideProperty}>Click</button>

      {/* and also can like tis but usually developers do this shortcuts, 
      but it's NOT EFFICIENT WAY of doing it, becuse you need to define, 
      if you define it with object so you can have separate object */}

      <p style={{ textAlign: "center", color: "blue" }}>I am learnig React</p>

    </div>
  );
}

export default Lesson1StyleAttributes;
