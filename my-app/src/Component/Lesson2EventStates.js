

const Lesson2EventStates = () => {
    let jobCounter = 0; 
    const handleClickEvent = ()=> {
        jobCounter++;
        console.log('Job count:', jobCounter);
    }

  return (
    <div style={{border:'solid 1px red', margin:'10px', padding: '10px'}}>
        
        <h1>Lesson 2: Event and States</h1>
        <p>Current job count {jobCounter}</p>
        <button onClick={handleClickEvent}>Click</button>
    </div>
  )
}

export default Lesson2EventStates

// the reason why not to display it on the webpage is the reason that we are not using State.
//So state is a mandatory come like concept
//State like information storage like a brain 
// 1:It represents the data that a component needs to keep track of and render its user interface.
//  Allows to control and showcase changing content or data in our Ul throughout Apps Lifecycle,
// 2: Object that stores information to a components functionality and appearance.Its UI

//HOW to use State in Real time:
// A single variable in component is considered as State variable.These are some ways to use State during Development:
// . useState
// . UseReducer
// . Contect API

// Why do we use States?
// .Dynamic UI Updates
// . Event Handling
// . Component Isolation
// . Efficient Rendering ( updating component triggers React to render)
