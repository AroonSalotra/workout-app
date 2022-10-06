import { useState, useRef, useId, useEffect } from "react"
import './Debug.css'
import DebugChild from "./DebugChild"

const DebugComponent = (props) => {

    const { liftAmount, setLiftAmount } = props;
    const [value, setValue] = useState(2)

    const handleChange = (e) => {
        const myCopy = liftAmount
        myCopy.squat = (e.target.value)
        setLiftAmount(myCopy)
        return setValue(e.target.value)
    }

    console.log(liftAmount)

    return (
        <div className="debugContainer">
            <input type="number"
                value={value}
                onChange={(e) => handleChange(e)}
            />
            <h1>LOCAL STATE: {value ? value : "undefined"}</h1>
            <h1>PROPS STATE: {liftAmount.squat}</h1>
        </div>
    )
}

export default DebugComponent;