import { useState, useRef } from "react";
import TrainingMax from "./TrainingMax";
// import planA from "./planA";
import { MdRoom } from "react-icons/md";
import Indicator from "./Indicator";
import PlanOne from "./PlanOne";
import PlanTwo from "./PlanTwo";


const Main = (props) => {
    const [squat, setSquat] = useState("82.2")
    const [bench, setBench] = useState("60")
    const [deadlift, setDeadlift] = useState("60")
    const [overhead, setOverhead] = useState("32.5")

    const ref = useRef(null)

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
        <div className="containerMain">

            {/* <div className="trainingMax">
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
            </div> */}

            {/* <h2 className="subTitle">Week One</h2> */}
            <div className="containerWeek">
                <div className="trainingWeek">
                    <h2 className="subTitle">Week One</h2>
                    <div className="trainingDay">
                        <h3 className="subTitle2">Push Day </h3>
                        <h3 className="liftType">Squat  </h3>
                        <PlanOne args={[0.65, 0.75, 0.85]} operand={squat} week={1} round={props.round} />
                        <h3>Bench</h3>
                        <PlanOne args={[0.65, 0.75, 0.85]} operand={bench} week={1} round={props.round} />
                    </div>
                    <div className="trainingDay">
                        <h3 className="subTitle2">Pull Day</h3>
                        <h3>Deadlift</h3>
                        <PlanOne args={[0.65, 0.75, 0.85]} operand={deadlift} week={1} round={props.round} />
                        <h3>Overhead</h3>
                        <PlanOne args={[0.65, 0.75, 0.85]} operand={overhead} week={1} round={props.round} />
                    </div>
                </div>

                <div className="trainingWeek">
                    <h2 className="subTitle">Week Two</h2>
                    <div className="trainingDay">
                        <h3 className="subTitle2">Push Day</h3>
                        <h3>Squat</h3>
                        <PlanOne args={[0.70, 0.80, 0.90]} operand={squat} week={2} round={props.round} />
                        <h3>Bench</h3>
                        <PlanOne args={[0.70, 0.80, 0.90]} operand={bench} week={2} round={props.round} />
                    </div>
                    <div className="trainingDay">
                        <h3 className="subTitle2">Pull Day</h3>
                        <h3>Deadlift</h3>
                        <PlanOne args={[0.70, 0.80, 0.90]} operand={deadlift} week={2} round={props.round} />
                        <h3>Overhead</h3>
                        <PlanOne args={[0.70, 0.80, 0.90]} operand={overhead} week={2} round={props.round} />
                    </div>
                </div>

                <div className="trainingWeek">
                    <h2 className="subTitle">Week Three</h2>
                    <div className="trainingDay">
                        <h3 className="subTitle2">Push Day</h3>
                        <h3>Squat</h3>
                        <PlanOne args={[0.75, 0.85, 0.95]} operand={squat} week={3} round={props.round} />
                        <h3>Bench</h3>
                        <PlanOne args={[0.75, 0.85, 0.95]} operand={bench} week={3} round={props.round} />
                    </div>
                    <div className="trainingDay">
                        <h3 className="subTitle2">Pull Day</h3>
                        <h3>Deadlift</h3>
                        <PlanOne args={[0.75, 0.85, 0.95]} operand={deadlift} week={3} round={props.round} />
                        <h3>Overhead</h3>
                        <PlanOne args={[0.75, 0.85, 0.95]} operand={overhead} week={3} round={props.round} />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Main;