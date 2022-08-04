
// import './index.css';
import { useEffect, useState } from 'react';
import './App.css'
import './Mobile.css'
// import './trainingMax.css'
import Landing from "./Landing";
// import TrainingMax from './TrainingMax';
import Main from './Main';
import DebugComponent from './DebugComponent';
import PlanOne from './PlanOne';
import Info from './Info';
import Calculator from './Calculator';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import PlanTwo from './PlanTwo';
import PlanTwoDisplay from './PlanTwoDisplay';
import Navbar from './Navbar';
import TrainingMaxDisplay from './TrainingMaxDisplay';

function App() {

  const [squat, setSquat] = useState("82.2")
  const [bench, setBench] = useState("60")
  const [deadlift, setDeadlift] = useState("60")
  const [overhead, setOverhead] = useState("32.5")


  const [display, setDisplay] = useState("none")
  const [opacity, setOpacity] = useState(1)
  // Rounding Number function to get closest 0.25
  const [value, setValue] = useState(null)

  const roundNum = (input) => {
    return Math.ceil(input / 2.5) * 2.5
  }

  useEffect(() => {
    return () => {
      <Link to={value}></Link>
      // console.log("effect")
    }
  }, [value])

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar setValue={setValue} value={value} />
        <TrainingMaxDisplay
          squat={squat} bench={bench} deadlift={deadlift} overhead={overhead}
          setSquat={setSquat} setBench={setBench} setDeadlift={setDeadlift} setOverhead={setOverhead}
        />
        <Calculator display={display} opacity={opacity} />
        <Routes>
          <Route exact path="/workout-app/plan-1" element={<Main round={roundNum}
            squat={squat} bench={bench} deadlift={deadlift} overhead={overhead}
            setSquat={setSquat} setBench={setBench} setDeadlift={setDeadlift} setOverhead={setOverhead}
          />}></Route>
          <Route exact path="/workout-app/plan-2" element={<PlanTwoDisplay />}></Route>
        </Routes>
        {/* <Landing round={roundNum} /> */}
        {/* <Info display={display} setDisplay={setDisplay} /> */}
        {/* <DebugComponent
          setValue={setValue}
          value={value} /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
