import { useState, useRef } from "react";
import TrainingMax from "./TrainingMax";
// import planA from "./planA";
import { MdRoom } from "react-icons/md";
import Indicator from "./Indicator";
import PlanOne from "./PlanOne";
import PlanTwo from "./PlanTwo";


const Main = (props) => {
    const [split, setSplit] = useState(1)
    const { liftAmount, setLiftAmount, round } = props;

    const PARAMS = [
        [0.65, 0.75, 0.85],
        [0.70, 0.80, 0.90],
        [0.75, 0.85, 0.95],
    ]

    const PROGRAM = [
        {
            args: PARAMS[0],
            operand: "squat",
            week: 1
        },
        {
            args: PARAMS[0],
            operand: "bench",
            week: 1
        },
        {
            args: PARAMS[0],
            operand: "deadlift",
            week: 1
        },
        {
            args: PARAMS[0],
            operand: "overhead",
            week: 1
        },
        {
            args: PARAMS[1],
            operand: "squat",
            week: 2
        },
        {
            args: PARAMS[1],
            operand: "bench",
            week: 2
        },
        {
            args: PARAMS[2],
            operand: "squat",
            week: 3
        },
        {
            args: PARAMS[2],
            operand: "bench",
            week: 3
        },
    ]

    // console.log(PARAMS)

    const PROGRAM2 = [
        { workout: "squat" },
        { workout: "bench" },
        { workout: "overhead" },
        { workout: "deadlift" },
    ]

    console.log(PROGRAM2)


    // console.log(props)
    return (
        <>
            <h2>{split}</h2>
            <div className="wrapper-plan-a">

                {PROGRAM2.map(({ workout }) => {
                    return <>
                        <PlanOne
                            workout={workout}
                            liftAmount={liftAmount}
                            round={round}
                            split={split}
                        />
                    </>
                })}

            </div>
        </>
    );

}

export default Main;