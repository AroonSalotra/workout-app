import { useState, useRef, useId, useEffect } from "react"
import './Debug.css'
import DebugChild from "./DebugChild"

const DebugComponent = (props) => {

    const { liftAmount, setLiftAmount, testState, setTestState } = props;
    const [value, setValue] = useState(2)

    const handleChange = (e) => {
        const myCopy = liftAmount
        myCopy.squat = (e.target.value)
        setLiftAmount(myCopy)
        return setValue(e.target.value)
    }

    const handleClick = () => {
        setTestState(testState + 1)
    }
    // console.log(liftAmount)

    return (
        <>
            <div className="debugContainer">
                <input type="number"
                    value={value}
                    onChange={(e) => handleChange(e)}
                />
            </div>

            <div>
                <h1 onClick={() => handleClick()}>{testState}</h1>
                <h1>STATE</h1>
                <p>squat: {liftAmount.squat}</p>
                <p>bench: {liftAmount.bench}</p>
                <p>deadlift: {liftAmount.deadlift}</p>
                <p>overhead: {liftAmount.overhead}</p>
            </div>

        </>
    )
}

export default DebugComponent;