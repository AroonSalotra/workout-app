import { useState, useRef } from "react";
import TrainingMax from "./TrainingMax";
// import planA from "./planA";
import { MdRoom } from "react-icons/md";
import Indicator from "./Indicator";
import PlanOne from "./PlanOne";
import PlanTwo from "./PlanTwo";


const Main = (props) => {
    const { liftAmount, setLiftAmount, round } = props;

    const PROGRAM = [
        {
            args: [0.65, 0.75, 0.85],
            operand: "squat",
            week: 1
        },
        {
            args: [0.65, 0.75, 0.85],
            operand: "bench",
            week: 1
        },
        {
            args: [0.70, 0.80, 0.90],
            operand: "squat",
            week: 2
        },
        {
            args: [0.70, 0.80, 0.90],
            operand: "bench",
            week: 2
        },
        {
            args: [0.75, 0.88, 0.95],
            operand: "squat",
            week: 3
        },
        {
            args: [0.75, 0.85, 0.95],
            operand: "bench",
            week: 3
        },
    ]

    return (
        <>
            {/* <div className="wrapper-plan-a"> */}
            <div className="wrapper-plan-a">
                {PROGRAM.map(({ args, operand, week }) => {
                    return <div className="program"
                        key={`${operand} ${week}`}>
                        <h3 className="subtitle">{operand}</h3>
                        <PlanOne
                            args={args}
                            operand={liftAmount[operand]}
                            round={round}
                            week={week}
                        />
                    </div>
                })}
            </div>
            {/* </div> */}
        </>
    );

}

export default Main;