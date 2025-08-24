import { useState } from 'react'

const JobForm = ({ categories, onSubmit }) => {
    const [jobDetails, setJobDetails] = useState({
        title: "",
        description: "",
        location: "",
        salary: "",
    });

    const [formError, setFormError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!jobDetails.title) {
            setFormError('Title is required');
            return;
        }

        if (!jobDetails.description) {
            setFormError('Job descriptin is required');
            return;
        }

        if (!jobDetails.location) {
            setFormError('Location is required');
            return;
        }

        if (!jobDetails.salary || isNaN(Number(jobDetails.salary))) {
            setFormError('Salary must be number');
            return;
        }

        setFormError('');
        onSubmit({ ...jobDetails, categories });

        //for clean input
        setJobDetails({
            title: "",
            description: "",
            location: "",
            salary: "",
        });
    };

    return (
        <form onSubmit={handleSubmit} className='job-froms'>
            <input type='text'
                placeholder='job Title'
                value={jobDetails.title}
                onChange={(e) => setJobDetails({ ...jobDetails, title: e.target.value })}
                className='job-froms' />

            <input type='text'
                placeholder='Job Description'
                value={jobDetails.description}
                onChange={(e) => setJobDetails({ ...jobDetails, description: e.target.value })} />

            <input type='text'
                placeholder='Location'
                value={jobDetails.location}
                onChange={(e) => setJobDetails({ ...jobDetails, location: e.target.value })} />

            <input type='number'
                placeholder='Salary'
                value={jobDetails.salary}
                onChange={(e) => setJobDetails({ ...jobDetails, salary: e.target.value })} />

            {formError && <p className="error-text">{formError}</p>}

            <button type="submit">submit</button>
        </form>
    )
}

export default JobForm