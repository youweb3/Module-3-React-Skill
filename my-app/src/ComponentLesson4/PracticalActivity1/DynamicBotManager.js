import React, { useState,} from "react";

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

  // Track which bot is being edited
  const [editingBotId, setEditingBotId] = useState(null);
  // Search term
  const [searchTerm, setSearchTerm] = useState("");

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

  // Handle edit
  // when clicking edit, load bot info into form and set editinBotId
  const editBot = (bot) => {
    setNewBot(bot);
    setEditingBotId(bot.id);
  };

  //Add or save bot
  // Add a new bot to the bots list after validation
  const addBotToList = () => {
    const { id, name, status } = newBot;

    // Validate that all fields are filled (trim removes whitespace)
    if (!id.trim() || !name.trim() || !status.trim()) {
      setError("Please fill all fields");

      return;

    } else if (editingBotId) {
      //save change
      setBots((prevBots) =>
        prevBots.map((bot) => (bot.id === editingBotId ? newBot : bot))
      );

      setEditingBotId(null); //reset editing state
      setNewBot({ id: "", name: "", status: "" });
      setSearchTerm('');
      setError("");
      return;

    } else if (bots.some((bot) => bot.id === id)) {
      setError("This ID already Exists!");
      return;
    }

    // Add the new bot to the existing bots array (using spread operator)
    setBots((prevBots) => [...prevBots, newBot]);
    // Clear the input fields after adding the bot
    setNewBot({ id: "", name: "", status: "" });
    setSearchTerm('');
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
    <div style={{border:'solid 2px blue', margin: '10px', padding:'15px'}}>
      <h1>Module 4 Lesson 1</h1>
      <h2>Dynamic Bot Manager</h2>
      <input
        type="text"
        name="id"
        placeholder="Put ID here"
        value={newBot.id}
        onChange={handleInputChange}
        disabled={editingBotId !== null}
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

      <button onClick={addBotToList} disabled={!isFormValid()}>
        {editingBotId ? "save changes" : "Add Data"}
      </button>

      {/* Display error message */}
      {error && <p style={{ color: "red" }}> {error}</p>}

      {/* search field */}
      <input
        type="text"
        placeholder="search by name or status"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginTop: "20px", display: "block" }}
      />

      <h3>Bot List</h3>
      <ul>
        {/* Map over bots array to display each bot */}
        {bots
          .filter((bot) => {
            if (!searchTerm.trim()) return true;
            return (
              String(bot.id).toLowerCase().includes(searchTerm.toLowerCase()) ||
              bot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              bot.status.toLowerCase().includes(searchTerm.toLowerCase())
            );
          })
          .map((bot) => (
            <li key={bot.id}>
              {bot.id} {bot.name} {bot.status} {""}
              <button onClick={() => editBot(bot)}>Edit</button>
              <button onClick={() => deleteBot(bot.id)}>Delete Data</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DynamicBotManager;
