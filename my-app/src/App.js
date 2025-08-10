import Lesson1Practical from "./Component/Lesson1Practical";
import Lesson1StyleAttributes from "./Component/Lesson1StyleAttributes";
import Lesson2EventStates from "./Component/Lesson2EventStates";
import Lesson2PracticalActivity from "./Component/Lesson2PracticalActivity";
import Lesson3UseState from "./Component/Lesson3UseState";
import Lesson4StateAndHandling from "./Component/Lesson4StateAndHandling";
import Lesson5UsingMapList from "./Component/Lesson5UsingMapList";
import DynamicBotManager from "./ComponentLesson4/PracticalActivity1/DynamicBotManager";// Module 4/ Lesson 1
import StatusBoard from './ComponentLesson4/PracticalActivity4/StatusBoard'; // Module 4/ Lesson 4

function App() {
  return (
    <div className="App">
      <Lesson1StyleAttributes/>
      <Lesson1Practical/>
      <Lesson2EventStates/>
      <Lesson2PracticalActivity/>
      <Lesson3UseState/>
      <Lesson4StateAndHandling/>
      <Lesson5UsingMapList/>
      <StatusBoard />
      <DynamicBotManager/>
    </div>
  );
}

export default App;
