import { useState, useRef } from "react";
import TrainingMax from "./TrainingMax";
// import planA from "./planA";
import { MdRoom } from "react-icons/md";
import Indicator from "./Indicator";
import PlanOne from "./ProgramBarbell";
import PlanTwo from "./ProgramDumbell";
import Background from "./Background";
import { GoChevronRight, GoChevronLeft } from "react-icons/go"


const DisplayBarbell = (props) => {
    const [split, setSplit] = useState(1)
    const { liftAmount, setLiftAmount, round } = props;
    const changeSplit = (e) => {
        const checkTarget = e.target.id === "next"
        // console.log(e.target.id)

        if (checkTarget) {
            split > 2 ? setSplit(1) : setSplit(split + 1)
        } else {
            split < 2 ? setSplit(3) : setSplit(split - 1)
        }
    }

    // console.log(PARAMS)

    const PROGRAM = [
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
            {/* <h1>5/3/1 Beginner</h1> */}
            <div className="btn-wrapper">
                <button
                    className="btn-arrow"
                    onClick={(e) => changeSplit(e)}>
                    <GoChevronLeft id="prev" />
                </button>
                <p className="subtitle">Week:{split}</p>
                <button
                    className="btn-arrow"
                    onClick={(e) => changeSplit(e)}>
                    <GoChevronRight id="next" />
                </button>
            </div>

            <section className="wrapper-barbell">

                {PROGRAM.map(({ workout }, index) => {
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

export default DisplayBarbell;