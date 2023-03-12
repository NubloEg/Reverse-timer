
import './App.css';
import React from "react";
import ResetTimerContainer from "./component/ResetTimer/ResetTimerContainer";

function App() {


  return (

    <div className="App">
        <ResetTimerContainer title={'HAPPY NEW YEAR'} description={'Как же я хочу быстрее '} deadline={{years:2024,month:3,days:12,hours:13,minutes:2,seconds:0}}  />
    </div>
  );
}

export default App;
