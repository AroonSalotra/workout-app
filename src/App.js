
// import './index.css';
import './App.css'
// import './trainingMax.css'
import Landing from "./Landing";
import TrainingMax from './TrainingMax';
import Main from './Main';
import DebugComponent from './DebugComponent';
import Lifts from './Lifts';

function App() {

  // Rounding Number function to get closest 0.25

  const roundNum = (input) => {
    // return Math.ceil(4 * input) / 4
    return Math.ceil(input / 2.5) * 2.5
  }

  return (
    <div className="App">
      <Landing round={roundNum} />
      {/* <TrainingMax round={roundNum} /> */}
      <Main round={roundNum} />
      {/* <Lifts round={roundNum} /> */}
      {/* <DebugComponent/> */}
    </div>
  );
}

export default App;
