import React, { useState } from "react";

const ConditionalTemplates = () => {
  const [bots, setBots] = useState([
    { id: 1, name: "Ali", status: "Developer" },
    { id: 2, name: "Alireza", status: "IT" },
    { id: 3, name: "AliMohammad", status: "Mechanic" },
  ]);

  const [newBots, setNewBot] = useState({ id: "", name: "", status: "" });
  const [error, setError] = useState(""); // to display the error message here
  const [show, setShow] = useState(false);

  // Remove bot by ID
  const handleRemove = (id) => {
    setBots(bots.filter((bot) => bot.id !== id));
  };

  // Add new bot after validation
  const addItem = () => {
    // Convert id string to number
    const numericId = Number(newBots.id);

    // Check if id already exists in the bots list
    // const idExists = bots.some((bot) => bot.id === numericId);
    // if (idExists) {
    //   alert("This ID already exists!");
    //   return;
    // }
    //check for duplicate ID
    if (bots.some((bot) => bot.id === numericId)) {
      setError("ID already exist!");
      return; // Stop function execution to prevent duplicate id insertion
    }

    // Validate inputs: ID must be number, name and status non-empty
    if (
      !isNaN(numericId) && ///// !isNaN(value) means: The value is a number.//// isNaN(value) means: The value is not a number.
      newBots.name.trim() !== "" &&
      newBots.status.trim() !== ""
    ) {
      setBots([...bots, { ...newBots, id: numericId }]); //Add new bot to the list with numeric id
      setNewBot({ id: "", name: "", status: "" }); //reset input
      setError("");
    } else {
      setError("Please enter a valid numeric ID and fill all fields."); ////Alert user if validation fails
    }
  };

  return (
    <div style={{ border: "solid 2px red", padding: "10px", margin: "10px" }}>
      <h1>module 4/ Lesson 2 Practice</h1>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide Details" : "show details"}
      </button>

      {show && (
        <ul>
          {bots.map((bot) => (
            <li key={bot.id}>
              {bot.id} {bot.name} {bot.status}
              <button onClick={() => handleRemove(bot.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}

      <br/>

      <input
        type="number"
        placeholder="Enter id here"
        value={newBots.id}
        onChange={(e) => setNewBot({ ...newBots, id: e.target.value })}
      />
      <input
        type="text"
        placeholder="Enter name here"
        value={newBots.name}
        onChange={(e) => setNewBot({ ...newBots, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Enter status here"
        value={newBots.status}
        onChange={(e) => setNewBot({ ...newBots, status: e.target.value })}
      />
      <button onClick={addItem}>Add Item</button>

      {error && <div style={{ color: "red", marginTop: "5px" }}> {error} </div>}
    </div>
  );
};

export default ConditionalTemplates;
