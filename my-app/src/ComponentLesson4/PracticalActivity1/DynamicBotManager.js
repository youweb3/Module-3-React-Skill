import React, { useState } from "react";

const DynamicBotManager = () => {
  // State to store the list of bots
  const [bots, setBots] = useState([
    { id: "1", name: "Ali", status: "Software" },
    { id: "2", name: "Alireza", status: "Developer" },
    { id: "3", name: "Kami", status: "Engineer" },
  ]);

  // State to store the new bot input values
  const [newBot, setNewBot] = useState({ id: "", name: "", status: "" });

  //statet for error message
  const [error, setError] = useState("");

  // Handle input changes for all input fields dynamically
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBot((prev) => ({
      ...prev, // Keep the existing properties of newBot unchanged
      //When you want to change part of an object or array without destroying the rest of it, you should use the spread operator (...).
      [name]: value, // Update only the changed input field based on its "name" attribute
    }));
    setError(""); //clear error on input change
  };

  // Add a new bot to the bots list after validation
  const addBotToList = () => {
    const { id, name, status } = newBot;

    // Validate that all fields are filled (trim removes whitespace)
    if (!id.trim() || !name.trim() || !status.trim()) {
      setError("Please fill all fields");
      return;
    }

    // Add the new bot to the existing bots array (using spread operator)
    setBots((prevBots) => [...prevBots, newBot]);
    // Clear the input fields after adding the bot
    setNewBot({ id: "", name: "", status: "" });
    setError("");
  };

  //chech if form is valid for enabling add button
  const isFormValid = () => {
    const { id, name, status } = newBot;
    return id.trim() && name.trim() && status.trim();
  };

  // Delete a bot from the bots list based on its id
  const deleteBot = (id) => {
    setBots((prevBots) => prevBots.filter((bot) => bot.id !== id));
  };

  return (
    <div>
      <h1>Module 4 Lesson 1</h1>
      <h2>Dynamic Bot Manager</h2>
      <input
        type="text"
        name="id"
        placeholder="Put ID heare"
        value={newBot.id}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="name"
        placeholder="Put name here"
        value={newBot.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="status"
        placeholder="Put status here"
        value={newBot.status}
        onChange={handleInputChange}
      />

      <button onClick={addBotToList} disabled={!isFormValid}>
        Add Data
      </button>

      {/* Display error message */}
      {error && <p style={{ color: "red" }}> {error}</p>}

      <h3>Bot List</h3>
      <ul>
        {/* Map over bots array to display each bot */}
        {bots.map((bot) => (
          <li key={bot.id}>
            {bot.id} {bot.name} {bot.status}
            <button onClick={() => deleteBot(bot.id)}>Delete Data</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicBotManager;
