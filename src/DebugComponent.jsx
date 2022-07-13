import { useState, useRef } from "react"
import './Debug.css'

const DebugComponent = () => {

    const ref = useRef(null)

    const addClass = () => {
        (ref.current.className == "currentClass" ? ref.current.className = "newClass" : ref.current.className = "currentClass")
    }

    return (
        <div className="debugContainer">
            <h1 ref={ref} className="currentClass" style={{ userSelect: "none" }} onClick={() => addClass()}>Test Component</h1>
            <h1>Test Component</h1>
        </div>
    )
}

export default DebugComponent;