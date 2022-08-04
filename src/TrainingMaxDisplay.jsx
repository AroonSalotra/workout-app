import TrainingMax from "./TrainingMax";
import { useState } from "react";

const TrainingMaxDisplay = (props) => {
    const [squat, setSquat] = useState("82.2")
    const [bench, setBench] = useState("60")
    const [deadlift, setDeadlift] = useState("60")
    const [overhead, setOverhead] = useState("32.5")

    const handleChange = (e) => {

        let liftType;
        const id = e.target.id;

        switch (id) {
            case "Squat":
                liftType = setSquat;
                break;
            case "Bench":
                liftType = setBench;
                break;
            case "Deadlift":
                liftType = setDeadlift;
                break;
            case "Overhead":
                liftType = setOverhead;
                break;
            default:
                liftType = "undefined"
        }
        return liftType(e.target.value)
    }
    return (
        <div className="trainingMax">
            <TrainingMax liftType={squat}
                round={props.round}
                handleChange={handleChange}
                id="Squat" />
            <TrainingMax liftType={bench}
                round={props.round}
                handleChange={handleChange}
                id="Bench" />
            <TrainingMax liftType={deadlift}
                round={props.round}
                handleChange={handleChange}
                id="Deadlift" />
            <TrainingMax liftType={overhead}
                round={props.round}
                handleChange={handleChange}
                id="Overhead" />
        </div>
    );
}

export default TrainingMaxDisplay;