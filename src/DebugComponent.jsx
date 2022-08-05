import { useState, useRef, useId, useEffect } from "react"
import './Debug.css'
import DebugChild from "./DebugChild"

const DebugComponent = (props) => {

    const handleClick = () => {
        console.log("success")
    }

    return (
        <div className="debugContainer">
            <select name="" id="">
                <option value="" onClick={() => handleClick()}>1</option>
                <option value="" onClick={() => handleClick()}>2</option>
            </select>

        </div>
    )
}

export default DebugComponent;