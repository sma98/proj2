import NewTrainersForm from '../components/meetups/NewTrainerForm';
//import axios from 'axios';

function NewTrainersPage() {
  function addMeetupHandler(TrainersData) {
   fetch(
      // 'http://127.0.0.1:5000/json',
      'http://localhost:3001/insert',
      {
        method: 'POST',
        body: JSON.stringify(TrainersData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
   
  }

  return (
    <section>
      <h1>Add New Trainer</h1>
      <NewTrainersForm submitHandler={addMeetupHandler} />
    </section>
    
  );
  //<NewTrainersForm onAddMeetup={addMeetupHandler} />
  
    
}

export default NewTrainersPage;

/*import React,{useState} from "react";

import Axios from 'axios';
import './App.css';

function App() {
  const[food,setFoodName] = useState("");
const[days,setDays]=useState(0);
const addToList = () => {
  Axios.post("http://localhost:3001/insert",{
    food:food,
    days:days,
  }
  
  )
 };
  
  return (
    <div className ="App">
     <h1> app </h1>
     <lable>food</lable>
     <input type="text"
     onChange={(event) => {setFoodName(event.target.value);}}
     ></input>
     <lable>days</lable>
     <input type= 'number'
      onChange={(event) => {setDays(event.target.value);}}
      ></input>
     <button onClick={addToList}>add</button>
    </div>
  );
}

export default App;
*/