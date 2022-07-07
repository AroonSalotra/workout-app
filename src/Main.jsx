import { useState } from "react";
import TrainingMax from "./TrainingMax";
import Lifts from "./Lifts";

const Main = (props) => {
    const [squat, setSquat] = useState("82.2")
    const [bench, setBench] = useState("60")
    const [deadlift, setDeadlift] = useState("60")
    const [overhead, setOverhead] = useState("32.5")

    const handleChange = (e) => {

        let liftType;
        const id = e.target.id;

        switch (id) {
            case "squat":
                liftType = setSquat;
                break;
            case "bench":
                liftType = setBench;
                break;
            case "deadlift":
                liftType = setDeadlift;
                break;
            case "overhead":
                liftType = setOverhead;
                break;
        }
        return liftType(e.target.value)

    }



    return (
        <div>
            <div className="trainingMax">
                <TrainingMax liftType={squat}
                    round={props.round}
                    handleChange={handleChange}
                    id="squat" />
                <TrainingMax liftType={bench}
                    round={props.round}
                    handleChange={handleChange}
                    id="bench" />
                <TrainingMax liftType={deadlift}
                    round={props.round}
                    handleChange={handleChange}
                    id="deadlift" />
                <TrainingMax liftType={overhead}
                    round={props.round}
                    handleChange={handleChange}
                    id="overhead" />
            </div>

            <h2>Week One</h2>
            <div className="trainingWeek">
                <div className="trainingDay">
                    <h3>Squat</h3>
                    {/* <Lifts value={0.65} operand={squat} round={props.round} /> */}
                    <Lifts args={[0.65, 0.75, 0.85]} operand={squat} round={props.round} />
                </div>
            </div>




        </div>

    );

}

export default Main;