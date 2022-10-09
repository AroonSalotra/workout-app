import { useState, useRef } from "react";
import TrainingMax from "./TrainingMax";
// import planA from "./planA";
import { MdRoom } from "react-icons/md";
import Indicator from "./Indicator";
import PlanOne from "./PlanOne";
import PlanTwo from "./PlanTwo";
import Background from "./Background";


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

    const changeSplit = (e) => {
        const checkTarget = e.target.id === "next"

        if (checkTarget) {
            split > 2 ? setSplit(1) : setSplit(split + 1)
        } else {
            split < 2 ? setSplit(3) : setSplit(split - 1)
        }
    }

    // console.log(PARAMS)

    const PROGRAM2 = [
        { workout: "squat" },
        { workout: "bench" },
        { workout: "overhead" },
        { workout: "deadlift" },
        { workout: "squat" },
        { workout: "bench" },
    ]

    // console.log(PROGRAM2)


    // console.log(props)
    return (
        <>
            <div className="btn-wrapper">
                <button
                    id="prev"
                    onClick={(e) => changeSplit(e)}>
                    PREV</button>
                <p>{split}</p>
                <button
                    id="next"
                    onClick={(e) => changeSplit(e)}>
                    NEXT</button>
            </div>

            <section className="wrapper-barbell">

                {PROGRAM2.map(({ workout }, index) => {
                    return <PlanOne
                        key={index}
                        workout={workout}
                        liftAmount={liftAmount}
                        round={round}
                        split={split} />
                })}

                <Background
                    imgUrl={"https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} />
            </section>

            <div className="description"
                style={{ maxWidth: "40%" }} >
                <p>
                    Pick a row to start (squat + bench) or (overhead press & deadlift).
                    A week is completed when you have cycled back to the first row
                    (Day 1: Squat, Bench), (Day 3: Overhead, Deadlift), (Day 5: Squat, Bench repeat). Once a week is finished, increase the split which will adjust your reps and sets accordingly.
                </p>
            </div>
        </>
    );

}

export default Main;