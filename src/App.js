
// import './index.css';
import { useState } from 'react';
import './App.css'
import './Mobile.css'
// import './trainingMax.css'
import Landing from "./Landing";
// import TrainingMax from './TrainingMax';
import DisplayBarbell from './DisplayBarbell';
import Calculator from './Calculator';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DisplayDumbell from './DisplayDumbell';
import Navbar from './Navbar';
import TrainingMaxDisplay from './TrainingMaxDisplay';
import DisplayBodyweight from './DisplayBodyweight';

function App() {

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

  const [value, setValue] = useState(null)

  const [plan, setPlan] = useState("Unselected Plan")

  const roundNum = (input) => Math.ceil(input / 2.5) * 2.5


  return (

    <BrowserRouter>
      <div className="App">


        <Navbar setValue={setValue} value={value} plan={plan} setPlan={setPlan}
          display={display} setDisplay={setDisplay}
        />
        <Calculator
          display={display} />

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

        {/* <Calculator
          display={display} opacity={opacity} /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
