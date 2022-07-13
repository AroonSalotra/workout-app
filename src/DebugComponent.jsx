import { useState, useRef, useId, useEffect } from "react"
import './Debug.css'
import DebugChild from "./DebugChild"

const DebugComponent = () => {

    return (
        <div className="debugContainer">
            <DebugChild />
            <DebugChild />
            <DebugChild />
            <DebugChild />
            <DebugChild />
            <DebugChild />
        </div>
    )
}

export default DebugComponent;