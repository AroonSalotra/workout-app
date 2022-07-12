
// import './index.css';
import { useState } from 'react';
import './App.css'
import './Mobile.css'
// import './trainingMax.css'
import Landing from "./Landing";
// import TrainingMax from './TrainingMax';
import Main from './Main';
import DebugComponent from './DebugComponent';
import Lifts from './Lifts';
import Info from './Info';
import Calculator from './Calculator';

function App() {

    const [display, setDisplay] = useState("none")
    const [opacity, setOpacity] = useState(1)
  // Rounding Number function to get closest 0.25

  const roundNum = (input) => {
    return Math.ceil(input / 2.5) * 2.5
  }

  return (
    <div className="App">
      {/* <Landing round={roundNum} /> */}
      <Info display={display} setDisplay={setDisplay}/>
      <Calculator display={display} opacity={opacity} />
      <Main round={roundNum} />
      {/* <Lifts round={roundNum} /> */}
      {/* <DebugComponent/> */}
    </div>
  );
}

export default App;
