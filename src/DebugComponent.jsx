import { useState } from "react"
import './Debug.css'

const DebugComponent = () => {

    const [display, setDisplay] = useState("none")

    const handleClick = () => {
      display === "none" ? setDisplay("block") : setDisplay("none")
    }

    return (
        <div className="debugContainer">
            <h1>Debug</h1>
            <input type="button" id="debugBtn" value=""
            onClick={() => handleClick()} />
            <ul className="debugList" style={{display: display}}>
                <li>Element One</li>
                <li>Element Two</li>
                <li>Element Three</li>
            </ul>
        </div>
    )
}

export default DebugComponent;