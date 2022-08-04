import { useState, useRef, useId, useEffect } from "react"
import './Debug.css'
import DebugChild from "./DebugChild"

const DebugComponent = (props) => {

    const data1 = [
        { name: "5/3/1", difficulty: "Beginner", rating: "5" }
    ]

    const data2 = [
        { name: "PFL", difficulty: "Intermediate", rating: "4" }
    ]

    const handleData = () => {
        switch (props.value) {
            case "plan-1":
                return data1.map(({ name, difficulty, rating }) => {
                    return <div>
                        <h1>{name}</h1>
                        <p>{difficulty}</p>
                        <p>{rating}</p>
                    </div>
                })
                break;
            case "plan-2":
                break;
            default:
                return null
        }
    }


    return (
        <div className="debugContainer">
            <DebugChild value={props.value}
                setValue={props.setValue} />
            <h1>{props.value}</h1>
            {handleData()}

            {/* {data1.map(({ name, difficulty, rating }) => {
                return <div>
                    <h1>{name}</h1>
                    <p>{difficulty}</p>
                    <p>{rating}</p>
                </div>
            })} */}

        </div>
    )
}

export default DebugComponent;