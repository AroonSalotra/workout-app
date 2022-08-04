import TrainingMax from "./TrainingMax";
import { useState } from "react";

const TrainingMaxDisplay = (props) => {
   

    const handleChange = (e) => {

        let liftType;
        const id = e.target.id;

        switch (id) {
            case "Squat":
                liftType = props.setSquat;
                break;
            case "Bench":
                liftType = props.setBench;
                break;
            case "Deadlift":
                liftType = props.setDeadlift;
                break;
            case "Overhead":
                liftType = props.setOverhead;
                break;
            default:
                liftType = "undefined"
        }
        return liftType(e.target.value)
    }

    return (
        <div className="trainingMax">
            <TrainingMax liftType={props.squat}
                round={props.round}
                handleChange={handleChange}
                id="Squat" />
            <TrainingMax liftType={props.bench}
                round={props.round}
                handleChange={handleChange}
                id="Bench" />
            <TrainingMax liftType={props.deadlift}
                round={props.round}
                handleChange={handleChange}
                id="Deadlift" />
            <TrainingMax liftType={props.overhead}
                round={props.round}
                handleChange={handleChange}
                id="Overhead" />
        </div>
    );
}

export default TrainingMaxDisplay;