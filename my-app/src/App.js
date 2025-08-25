import Lesson1Practical from "./Component/Lesson1Practical";
import Lesson1StyleAttributes from "./Component/Lesson1StyleAttributes";
import Lesson2EventStates from "./Component/Lesson2EventStates";
import Lesson2PracticalActivity from "./Component/Lesson2PracticalActivity";
import Lesson3UseState from "./Component/Lesson3UseState";
import Lesson4StateAndHandling from "./Component/Lesson4StateAndHandling";
import Lesson5UsingMapList from "./Component/Lesson5UsingMapList";
import AddAndRemoveElements from "./ComponentLesson4/PracticalActivity1/AddAndRemoveElements";
import DynamicBotManager from "./ComponentLesson4/PracticalActivity1/DynamicBotManager";// Module 4/ Lesson 1
import ConditionalTemplates from "./ComponentLesson4/PracticalActivity2/ConditionalTemplates";//Module 4 /Lesson2
import Main from "./ComponentLesson4/PracticalActivity3/Main";// Module 4/ Lesson 3
import StatusBoard from './ComponentLesson4/PracticalActivity4/StatusBoard'; // Module 4/ Lesson 4
import JobForm from "./ComponentModule5/Lesson1/JobForm";// Module 5/ Lesson 1
import MainJob from "./ComponentModule5/Lesson3/MainJob";// Module 5/ Lesson 3
import JobManagement from "./ComponentModule5/Lesson4/JobManagement"; //Module 5/ Lesson 4
import JobManagementCategory from './ComponentModule6/Lesson1/JobManagementCategory'; // Module 6/ Lesson 1
import CategorySelector from "./ComponentModule6/Lesson2/CategorySelector";

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
      <AddAndRemoveElements/>
      <DynamicBotManager/>
      <ConditionalTemplates/>
      <Main/>
      <StatusBoard />
      <JobForm/>
      <MainJob/>
      <JobManagement/>
      <JobManagementCategory />
      <CategorySelector/>
    </div>
  );
}

export default App;
