import React, { useState } from "react";

const Lesson5UsingMapList = () => {
  const [bots, setBots] = useState([
    { id: 1, name: "Bot A", status: "Stopped" },
    { id: 2, name: "Bot B", status: "Running" },
    { id: 3, name: "Bot C", status: "Completed" },
  ]);

  const [newBotName, setNewBotName] = useState("");
  const [statusFilter, setStatusFilter] = useState("All"); //// State to keep track of the selected status filter (default is "All")

  // Function to add a new bot to the list
  const handleAddBot = () => {
    if (!newBotName.trim()) return; // avoid adding empty name
    const newBot = {
      id: bots.length + 1, //Simple ID generation (not ideal in real apps)
      name: newBotName,
      status: "Stopped",
    };

    setBots([...bots, newBot]);// Add the new bot to the list
    setNewBotName(""); //clear input after adding
  };

    // Function to change status of a bot cyclically: Stopped -> Running -> Completed -> Stopped
  // const triggerJob = (id) => {
  //   const updateBots = bots.map ((bot) => {
  //     if(bot.id === id) {
  //       return {
  //         ...bot, status: 'Done'
  //       }
  //     }
  //     return bot;
  //   });

  //   setBots(updateBots);
  // }
  ////////////////////////////////
  //version 1:
  // Use this approach when the condition is short and straightforward,
  // and you don't need to reuse the new value elsewhere.
  // It keeps the code concise but can be harder to read if the logic grows.

  // const triggerJob = (id) =>{
  //   const uptadeBots = bots.map((bot) =>{
  //     if (bot.id === id) {
  //       let newState = '';
  //       if(bot.status === 'Stopped') newState = 'runinng';
  //       else if(bot.status === 'Running') newState = 'Completed';
  //       else newState = 'Stopped';

  //       return {...bot, status: newState};
  //     }

  //     return bot;
  //   });

  //   setBots(uptadeBots);
  // }

  ////////////////////////
  //version 2:
  // Use this approach when the condition is short and straightforward,
  // and you don't need to reuse the new value elsewhere.
  // It keeps the code concise but can be harder to read if the logic grows.
  // use for short code and simple
  ///Function to handle changing the status of a specific bot by its id
  const triggerJob = (id) => {
    // Using map to create a new updated array of bots
    const updatedBots = bots.map((bot) => {
      // Check if current bot's id matches the id passed to the function
      if (bot.id === id) {
        // Conditional checks to decide the next status of the bot if status is 'stopped', change it to 'running'
        if (bot.status === "Stopped") return { ...bot, status: "Running" };
        else if (bot.status === "Running")
          return { ...bot, status: "Completed" };
        // For any other status (like "Completed"), reset back to "Stopped"
        else return { ...bot, status: "Stopped" };
      }
      // For all other bots (ids not matching), return them unchanged
      return bot;
    });
    // Update the state with the new array, triggering a re-render
    setBots(updatedBots);
  };

  // Function to delete a bot from the list by id
  // This function filters out the bot with the given id and updates the state
  const deleteBot = (id) => {
    const updateBots = bots.filter((bot) => bot.id !== id); // Keep only bots that don't match the given id
    setBots(updateBots); // Update state with the new list
  };


  // Function to sort bots alphabetically by their name
  const handleSort = () => {
      const sortedBots = [...bots].sort((a, b) => (a.name || '').localeCompare(b.name || ''));
      setBots(sortedBots);
  };

  // Filter bots based on status filter; if 'All', show all bots
  const filteredBots = statusFilter === 'All'
  ? bots
  : bots.filter((bot) => bot.status === statusFilter);
  

  return (
    <div style={{ border: "solid 1px black", margin: "10px", padding: "10px" }}>
      <h2>List of Bots</h2>

      {/* Section to add a new bot */}
      <div>
        <h3>Add a new bot</h3>
        {/* Without value, React has no control over the input content.The 
        value of the input is always synced with the React 
        Controlled input: 
        - 'value' links input value to React state 
        - 'onChange' updates state when user types 
        Without these, input will not work properly or will be read-only */}

        {/* 
  'e' is the event object passed automatically by React.
  'e.target' refers to the input element.
  'e.target.value' gets the current text inside the input.
*/}
        <input
          type="text"
          placeholder="Enter bot name"
          value={newBotName}
          onChange={(e) => setNewBotName(e.target.value)}
        ></input>
        <button onClick={handleAddBot}>Add Bot</button>
      </div>

      {/* Section to filter bots by status */}
      <div style={{ marginBottom: "10px" }}>
        <label>Filter by status</label>
        {/* -Dropdown to filter bots based on their status
            -Updates the statusFilter state when a new option is selected */}
        <select
          id="filter"
          value={statusFilter} // the selected value save inside state
          onChange={(e) => setStatusFilter(e.target.value)} //update value
        >
          <option value="All">All</option>
          <option value="Stopped">Stopped</option>
          <option value="Running">Running</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* Button to sort bots by name */}
      <button onClick={handleSort}>Sort and Storing</button>
       
       {/* List of bots after filtering and sorting */}
      <ul>
        {filteredBots.map((bot) => (
          <li key={bot.id}>
            <strong>{bot.id}</strong> - {bot.name} -
            <span style={{ color: bot.status === "Done" ? "red" : "blue" }}>
              {bot.status}
            </span>
            <button onClick={() => triggerJob(bot.id)}>Trigger Job</button>
            {/* Button to delete the bot from the list */}
            <button onClick={() => deleteBot(bot.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lesson5UsingMapList;

// <ul>
//   {box.map(({ id, boxname, status }) => (
//     <li>
//       {id}-{boxname}-{status} <button>Run your Job</button>
//     </li>
//   ))}
// </ul>


/////////////////
// handleAddBot:
// - Adds a new bot with the entered name to the bots array.
// - Prevents adding empty names by trimming the input.
// - New bots start with status "Stopped".

// triggerJob:
// - Changes a bot's status in a cycle: Stopped -> Running -> Completed -> Stopped.
// - Uses map to create a new array with updated bot status.

// deleteBot:
// - Removes a bot from the list by filtering out the bot with the specified id.

// sortBotsByName:
// - Sorts the bots array alphabetically by bot names using localeCompare.
// - Uses a shallow copy of bots array to avoid mutating original state directly.

// filteredBots:
// - Filters bots based on the selected statusFilter.
// - Shows all bots if statusFilter is "All".

// The UI includes:
// - Input + button to add bots.
// - Dropdown select to filter bots by status.
// - Button to sort bots by name.
// - List of filtered (and sorted) bots with Trigger and Delete buttons.
