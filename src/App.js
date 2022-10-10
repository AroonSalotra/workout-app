
// import './index.css';
import { useState } from 'react';
import './App.css'
import './Mobile.css'
// import './trainingMax.css'
import Landing from "./Landing";
// import TrainingMax from './TrainingMax';
import DisplayBarbell from './DisplayBarbell';
import Info from './Info';
import Calculator from './Calculator';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import DisplayDumbell from './DisplayDumbell';
import Navbar from './Navbar';
import TrainingMaxDisplay from './TrainingMaxDisplay';
import ViewPlan from './ViewPlan';
import DisplayBodyweight from './DisplayBodyweight';

function App() {

  const [squat, setSquat] = useState("82.2")
  const [bench, setBench] = useState("60")
  const [deadlift, setDeadlift] = useState("60")
  const [overhead, setOverhead] = useState("32.5")

  const [testState, setTestState] = useState(0)

  const [liftAmount, setLiftAmount] = useState({
    squat: 80,
    bench: 60,
    deadlift: 90,
    overhead: 40
  })

  // console.log(liftAmount) 

  // useEffect(() => {
  //   console.log("from state:", liftAmount)
  // }, [liftAmount])

  const [display, setDisplay] = useState("none")
  const [opacity, setOpacity] = useState(1)

  const [value, setValue] = useState(null)

  const [plan, setPlan] = useState("Unselected Plan")

  const roundNum = (input) => Math.ceil(input / 2.5) * 2.5


  return (

    <BrowserRouter>
      <div className="App">

        {/* <Navbar setValue={setValue} value={value} plan={plan} setPlan={setPlan} /> */}

        <Navbar setValue={setValue} value={value} plan={plan} setPlan={setPlan}
          display={display} setDisplay={setDisplay}
        />

        {/* <TrainingMaxDisplay
          liftAmount={liftAmount} setLiftAmount={setLiftAmount} /> */}
        <Calculator
          display={display} opacity={opacity} />

        <Routes>
          <Route exact path="/workout-app/home"
            element={<>
              <Landing round={roundNum} />
            </>}
          >
          </Route>

          <Route exact path="/workout-app/plan-1" element={
            <>
              <TrainingMaxDisplay
                liftAmount={liftAmount} setLiftAmount={setLiftAmount} />
              <DisplayBarbell
                round={roundNum}
                liftAmount={liftAmount}
                setLiftAmount={setLiftAmount}
              />
            </>

          }>
          </Route>

          <Route exact path="/workout-app/plan-2" element={
            <>
              <TrainingMaxDisplay
                liftAmount={liftAmount} setLiftAmount={setLiftAmount} />
              <DisplayDumbell
                quat={squat}
                deadlift={deadlift}
                bench={bench}
                overhead={overhead}
                liftAmount={liftAmount}
                setLiftAmount={setLiftAmount}
                round={roundNum} />

            </>
          }>
          </Route>

          <Route exact path="/workout-app/plan-3" element={
            <>
              <TrainingMaxDisplay
                liftAmount={liftAmount} setLiftAmount={setLiftAmount} />
              <DisplayBodyweight />
            </>
          } >

          </Route>

        </Routes>

        {
          /* <TrainingMaxDisplay
          liftAmount={liftAmount} setLiftAmount={setLiftAmount}
        />

        <ViewPlan
          plan={plan} display={display} setDisplay={setDisplay} />

        <Calculator
          display={display} opacity={opacity} /> */
        }
        {/* <Info display={display} setDisplay={setDisplay} /> */}
        {/* <DebugComponent
          liftAmount={liftAmount}
          setLiftAmount={setLiftAmount}
          testState={testState}
          setTestState={setTestState}
        /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
