import React, { useState } from "react";

const AddAndRemoveElements = () => {
  // bots: state variable that stores the list of bots.
  // setBotValues: function to update the bots state. whenever you want to update a state variable, use its corresponding set function.
  const [bots, setBotValues] = useState([
    { id: 22, botname: "sending", status: "Waiting" },
    { id: 23, botname: "Reading", status: "Sompleted" },
    { id: 24, botname: "Warting", status: "Stoped" },
  ]);

  // newBot state to keep inputs of new bot (as object, not array)
  const [newBot, setNewBot] = useState({ id: "", botname: "", status: "" });

  // Function to delete a bot by its unique id.
  // It keeps all bots except the one with the matching id.
  function handleDelete(id) {
    setBotValues(bots.filter((bot) => bot.id !== id)); //means keep all bots whose Id is not equal to the id we want to remove.
  }

  // Add function: Add newBot to bots list if all fields are filled
  const addBotToList = () => {
    if (
      newBot.id.trim() !== "" &&
      newBot.botname.trim() !== "" &&
      newBot.status.trim() !== ""
    ) {
      setBotValues([...bots, newBot]); //add newBot to bots list
      setNewBot({ id: "", botname: "", status: "" }); //reset inputs
    }
  };

  return (
    <div style={{ border: "solid 2px blue", padding: "10px", margin: "15px" }}>
      <h1>Module 4/ Lesson 1</h1>
      <h2>Bots running </h2>

      <ul>
        {bots.map((bot) => (
          // Using bot.id ensures keys are unique and stable.
          <li key={bot.id}>
            {/* Display bot properties */}
            {bot.id} {bot.botname} {bot.status}
            {/* Delete button: uses an anonymous function to pass bot.id.  
            If you remove the ()=> wrapper, the delete function will run immediately on render,  
            causing all items to be deleted without any click. */}
            <button onClick={() => handleDelete(bot.id)}>Delet your job</button>
          </li>
        ))}
      </ul>
      <br></br>
      {/* Input fields to add a new bot */}
      <input
        type="text"
        placeholder="Enter ID here"
        value={newBot.id}
        onChange={(e) => setNewBot({ ...newBot, id: e.target.value })}
      />
      <input
        type="text"
        placeholder="Enter bot name here"
        value={newBot.botname}
        onChange={(e) => setNewBot({ ...newBot, botname: e.target.value })}
      />
      <input
        type="text"
        placeholder="Enter status here"
        value={newBot.status}
        onChange={(e) => setNewBot({ ...newBot, status: e.target.value })}
      />
      <button onClick={addBotToList}>Add New Bot</button>
    </div>
  );
};

export default AddAndRemoveElements;

// input onchange()
//onChange={(e) => setNewBot({ ...newBot, id: e.target.value })}
//// Create a new object by copying old newBot,
// then update the 'id' property with new input value,
// finally update the state with this new object.

//event
// 'e' is the event object representing the input change event,
// 'e.target' is the input element where the event happened,
// 'e.target.value' is the current value typed in the input.