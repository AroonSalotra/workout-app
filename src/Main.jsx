import { useState, useRef } from "react";
import TrainingMax from "./TrainingMax";
// import planA from "./planA";
import { MdRoom } from "react-icons/md";
import Indicator from "./Indicator";
import PlanOne from "./PlanOne";
import PlanTwo from "./PlanTwo";


const Main = (props) => {

    return (
        <div className="containerMain">
            <div className="containerWeek">
                <div className="trainingWeek">
                    <h2 className="subTitle">Week One</h2>
                    <div className="trainingDay">
                        <h3 className="subTitle2">Push Day </h3>
                        <h3 className="liftType">Squat  </h3>
                        <PlanOne args={[0.65, 0.75, 0.85]} operand={props.squat} week={1} round={props.round} />
                        <h3>Bench</h3>
                        <PlanOne args={[0.65, 0.75, 0.85]} operand={props.bench} week={1} round={props.round} />
                    </div>
                    <div className="trainingDay">
                        <h3 className="subTitle2">Pull Day</h3>
                        <h3>Deadlift</h3>
                        <PlanOne args={[0.65, 0.75, 0.85]} operand={props.deadlift} week={1} round={props.round} />
                        <h3>Overhead</h3>
                        <PlanOne args={[0.65, 0.75, 0.85]} operand={props.overhead} week={1} round={props.round} />
                    </div>
                </div>

                <div className="trainingWeek">
                    <h2 className="subTitle">Week Two</h2>
                    <div className="trainingDay">
                        <h3 className="subTitle2">Push Day</h3>
                        <h3>Squat</h3>
                        <PlanOne args={[0.70, 0.80, 0.90]} operand={props.squat} week={2} round={props.round} />
                        <h3>Bench</h3>
                        <PlanOne args={[0.70, 0.80, 0.90]} operand={props.bench} week={2} round={props.round} />
                    </div>
                    <div className="trainingDay">
                        <h3 className="subTitle2">Pull Day</h3>
                        <h3>Deadlift</h3>
                        <PlanOne args={[0.70, 0.80, 0.90]} operand={props.deadlift} week={2} round={props.round} />
                        <h3>Overhead</h3>
                        <PlanOne args={[0.70, 0.80, 0.90]} operand={props.overhead} week={2} round={props.round} />
                    </div>
                </div>

                <div className="trainingWeek">
                    <h2 className="subTitle">Week Three</h2>
                    <div className="trainingDay">
                        <h3 className="subTitle2">Push Day</h3>
                        <h3>Squat</h3>
                        <PlanOne args={[0.75, 0.85, 0.95]} operand={props.squat} week={3} round={props.round} />
                        <h3>Bench</h3>
                        <PlanOne args={[0.75, 0.85, 0.95]} operand={props.bench} week={3} round={props.round} />
                    </div>
                    <div className="trainingDay">
                        <h3 className="subTitle2">Pull Day</h3>
                        <h3>Deadlift</h3>
                        <PlanOne args={[0.75, 0.85, 0.95]} operand={props.deadlift} week={3} round={props.round} />
                        <h3>Overhead</h3>
                        <PlanOne args={[0.75, 0.85, 0.95]} operand={props.overhead} week={3} round={props.round} />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Main;