import React from 'react'

//JobItem component: displaysa single job item
//props:Props are data that you get. bot/ onDelete : 
// -bot: object with job details (id, name, status)
// - onDelete: callback function to delete the job by id

const JobItem = ({bot, onDelete}) => {
    // let bgColor;
    // if(bot.status === 'completed') {
    //   bgColor = '#d4edda'; //green for compeleted
    // } else if (bot.status === "running"){
    //   bgColor = "#fff3cd"; // yellow for running
    // }else {
    //   bgColor = "#f8d7da"; // red for others
    // }

  let bgColor;
  if (bot.status === 'completed') bgColor = '#d4edda'; // green for completed
  else if (bot.status === 'running') bgColor = 'red'; // yellow for running
  else bgColor = '#f8d7da'; // red for others
  return (
    <div>
        <li style={{backgroundColor: bgColor, padding:'10px', margin: '5px 0', borderRadius: '5px'}}>
            {bot.id} {bot.name} {bot.status}

             {/* when clicked, calls onDelete with the job id */}
            <button onClick={() => onDelete(bot.id)} style={{marginLeft:"5px"}}>Delete</button>
        </li>
    </div>
  )
};

export default JobItem