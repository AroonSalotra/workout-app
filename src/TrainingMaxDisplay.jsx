import TrainingMax from "./TrainingMax";
import { useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs"

const TrainingMaxDisplay = (props) => {

    const [display, setDisplay] = useState("opacity-none")


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

    const handleClick = () => {
        (display === "" ? setDisplay("opacity-none") : setDisplay(""))
    }

    return (
        <>
            <h2>1 Rep Max <BsFillInfoCircleFill className="icon-m"
                onClick={() => handleClick()} /></h2>
            <p className={display}>
                To calculate your 1 Rep Max, perform each lift at the highest
                weight you feel you can lift for 1 successful rep</p>
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
        </>
    );
}

export default TrainingMaxDisplay;