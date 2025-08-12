import React from 'react';
import JobItem from './JobItem';

const JobList = ({bots, onDelete}) => {
  return (
    <div>
        <ul>
            {bots.map((bot)=> (
                <JobItem key={bot.id} bot={bot} onDelete={onDelete}/>
            ))}
        </ul>
    </div>
  )
}

export default JobList


//bots: Gets the array of items (jobs) from the parent.

//onDelete: Gets the delete function and passes it to each JobItem.

//Inside the return, it sends each item bot to the JobItem and also sets the key.