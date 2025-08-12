import React, { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import JobList from "./JobList";
import AddJobForm from "./AddJobForm";

const ConditionalTemplates = () => {
  const [bots, setBots] = useState([
    { id: 1, name: "Ali", status: "Developer" },
    { id: 2, name: "Alireza", status: "IT" },
    { id: 3, name: "AliMohammad", status: "Mechanic" },
  ]);

  const [newBot, setNewBot] = useState({ id: "", name: "", status: "" });
  const [error, setError] = useState(""); // to display the error message here
  const [show, setShow] = useState(false);

  // Remove bot by ID
  const handleRemove = (id) => {
    setBots(bots.filter((bot) => bot.id !== id));
  };

  // Add new bot after validation
  const addItem = () => {
    // Convert id string to number
    const numericId = Number(newBot.id);

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
      newBot.name.trim() !== "" &&
      newBot.status.trim() !== ""
    ) {
      setBots([...bots, { ...newBot, id: numericId }]); //Add new bot to the list with numeric id
      setNewBot({ id: "", name: "", status: "" }); //reset input
      setError("");
    } else {
      setError("Please enter a valid numeric ID and fill all fields."); ////Alert user if validation fails
    }
  };

  return (
    <div style={{ border: "solid 2px red", padding: "10px", margin: "10px" }}>
      <Header />

      <button onClick={() => setShow(!show)}>
        {show ? "Hide Details" : "show details"}
      </button>

      {show && <JobList bots={bots} onDelete={handleRemove} />}

      <AddJobForm
        newBot={newBot}
        setNewBot={setNewBot}
        addItem={addItem}
        error={error}
      />

      <Footer />

    </div>
  );
};

export default ConditionalTemplates;
