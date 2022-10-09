import { useId } from "react";

const PlanTwo = (props) => {

    const { day, squat, deadlift, overhead, bench, round, type } = props;

    // console.log(squat)

    const split = {
        A: [
            { workout: "Bulgarian Split Squat" },
            { workout: "Floor Press" },
            { workout: "Bulgarian Split Squat" },
        ],
        B: [
            { workout: "Plank" },
            { workout: "Straight-Legged Deadlift" },
            { workout: "Bent-Over Row" },
        ]
    }

    console.log(split.A)

    let index
    day === "A" ? index = split.A : index = split.B


    return (
        <>
            <h3>{day === "A" ? "Split A" : "Split B"}</h3>
            <ul>
                {index.map(({ workout }) => {
                    return <>
                        <li className="rep">{workout}</li>
                    </>
                })}
            </ul>
        </>
    );
}

export default PlanTwo;