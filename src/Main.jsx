import { useState, useRef } from "react";
import TrainingMax from "./TrainingMax";
// import planA from "./planA";
import { MdRoom } from "react-icons/md";
import Indicator from "./Indicator";
import PlanOne from "./PlanOne";
import PlanTwo from "./PlanTwo";


const Main = (props) => {
    const { liftAmount, setLiftAmount, round } = props;

    return (
        <div className="containerMain">
            <div className="containerWeek">
                <div className="trainingWeek">
                    <h2 className="subTitle">Week One</h2>
                    <div className="trainingDay">
                        <h3 className="subTitle2">Push Day </h3>
                        <h3 className="liftType">Squat  </h3>

                        <PlanOne
                            args={[0.65, 0.75, 0.85]}
                            operand={liftAmount.squat}
                            week={1}
                            round={round} />

                        <h3>Bench</h3>

                        <PlanOne
                            args={[0.65, 0.75, 0.85]}
                            operand={liftAmount.bench}
                            week={1}
                            round={round} />
                    </div>

                    <div className="trainingDay">
                        <h3 className="subTitle2">Pull Day</h3>
                        <h3>Deadlift</h3>
                        <PlanOne args={[0.65, 0.75, 0.85]} operand={props.deadlift} week={1} round={props.round} />
                        <h3>Overhead</h3>
                        <PlanOne args={[0.65, 0.75, 0.85]} operand={props.overhead} week={1} round={props.round} />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Main;