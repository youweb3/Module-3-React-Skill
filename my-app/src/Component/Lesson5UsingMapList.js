import React, { useState } from "react";

const Lesson5UsingMapList = () => {
  const [bots, setBots] = useState([
    { id: 1, name: "Bot A", status: "Stopped" },
    { id: 2, name: "Bot B", status: "Running" },
    { id: 3, name: "Bot C", status: "Completed" },
  ]);

  const [newBotName, setNewBotName] = useState("");

  const handleAddBot = () => {
    if (!newBotName.trim()) return; // avoid adding empty name
    const newBot = {
      id: bots.length + 1, //Simple ID generation (not ideal in real apps)
      name: newBotName,
      status: "Stopped",
    };

    setBots([...bots, newBot]);
    setNewBotName(""); //clear input
  };

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

  return (
    <div style={{ border: "solid 1px black", margin: "10px", padding: "10px" }}>
      <h2>List of Bots</h2>
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

      <ul>
        {bots.map((bot) => (
          <li key={bot.id}>
            <strong>{bot.id}</strong> - {bot.name} -
            <span style={{ color: bot.status === "Done" ? "red" : "blue" }}>
              {bot.status}
            </span>
            <button onClick={() => triggerJob(bot.id)}>Trigger Job</button>
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
