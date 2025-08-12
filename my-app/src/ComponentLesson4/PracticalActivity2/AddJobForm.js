import React from "react";

const AddJobForm = ({ newBot, setNewBot, addItem, error }) => {
  return (
    <div>
      <input
        type="number"
        placeholder="Enter id here"
        value={newBot.id}
        onChange={(e) => setNewBot({ ...newBot, id: e.target.value })}
      />
      <input
        type="text"
        placeholder="Enter name here"
        value={newBot.name}
        onChange={(e) => setNewBot({ ...newBot, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Enter status here"
        value={newBot.status}
        onChange={(e) => setNewBot({ ...newBot, status: e.target.value })}
      />

      <button onClick={addItem}>Add Item</button>

      {error && <div style={{ color: "red", marginTop: "5px" }}> {error} </div>}

    </div>
  );
};

export default AddJobForm;

// Moved the job input fields and Add Item button from ConditionalTemplates to a separate AddJobForm component.
// Passed necessary data (newBot state) and functions (setNewBot, addItem, error) as props from ConditionalTemplates to AddJobForm.
// This keeps ConditionalTemplates cleaner and AddJobForm handles form state updates and submission via props.
/////////
// We pass both `newBot` and `setNewBot` as props because:
// - `newBot` holds the current form data (state).
// - `setNewBot` is the function to update that state when user types in the form.

// For `error` and `setError`:
// - If you want to display the error message inside AddJobForm, pass `error` as a prop.
// - If you want to update/change the error message inside AddJobForm, also pass `setError`.

// In the current setup, error is managed and displayed in the parent component (ConditionalTemplates),
// so only `error` might be needed as a prop for display.
// But if you want full control of error inside AddJobForm, pass both `error` and `setError`.

//////////////////

// newBot is an object that holds the form input data (id, name, status).

// In addItem, we first convert the id to a number (numericId) and check that it doesn't already exist in the bots list.

// If the id is a duplicate, we throw an error and prevent the addition.

// Then we validate that all fields are filled in and the id is numeric.

// If everything is correct, we add the new object to the bots array and clear the entries.

// To display the list, when show is active, we call the JobList component and pass it bots and the remove function (handleRemove).

// The entries are handled; that is, their value is stored in state and updated with each change.
///////////////////////

// The addItem function needs to be defined in the parent component (ConditionalTemplates)
// because it works directly with the main state variables (bots, setBots) and the core logic of the app.
//
// We only pass this function as a prop to the child component (AddJobForm) so that
// the child can trigger the function when the Add button is clicked,
// allowing the parent to handle the state update.
//
// This approach avoids duplicating state management and logic inside AddJobForm,
// keeping the code cleaner and less complex.

