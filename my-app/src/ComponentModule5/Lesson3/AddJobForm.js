import React, { useState } from 'react';

const AddJobForm = ({onAddJob}) => {

    const [newJobTitle, setNewJobTitle] = useState('');

    const handleAddJob = (e) => {
        e.preventDefault();
        if (!newJobTitle) return;
        
        const newJob = {
            id: Date.now(),
            title: newJobTitle,
            status: 'Need to Start'
        };
        onAddJob(newJob);
        setNewJobTitle('');
    }

    return (
        <form onSubmit={handleAddJob}>
            <input type='text'
                placeholder='Add your Job'
                value={newJobTitle}
                onChange={(e) => setNewJobTitle(e.target.value)}
            />
            <button type='submit'>Add Job</button>
        </form>
    );
};

export default AddJobForm