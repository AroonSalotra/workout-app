import { useId } from "react";

const PlanTwo = (props) => {

    const { day, liftAmount, round } = props;

    // console.log(squat)

    const split = {
        A: [
            { workout: "Bulgarian Split Squat", operand: liftAmount.squat, modifier: 0.3 },
            { workout: "Floor Press" },
            { workout: "Straight-Legged Deadlift", operand: liftAmount.deadlift, modifier: 0.55 },
            { workout: "Plank" },
        ],
        B: [
            { workout: "Bulgarian Split Squat", operand: liftAmount.squat, modifier: 0.3 },
            { workout: "Seated Shoulder Press", operand: liftAmount.overhead, modifier: 0.5 },
            { workout: "Bent-Over Row", operand: liftAmount.deadlift, modifier: 0.35 },
            { workout: "Plank" },
        ]
    }

    console.log(split.A)

    let index
    day === "A" ? index = split.A : index = split.B

    return (
        <>
            <section className="wrapper-dumbell">
                <h2>
                    {day === "A" ? "Split A" : "Split B"}
                </h2>
                <div className="program">

                    <ul>
                        {index.map(({ workout, operand, modifier }) => {
                            return <>
                                {/* <li className="set">{workout}
                                <span className="reps">upto 10</span>
                            </li> */}
                                <h3 className="program-title">{workout}</h3>
                                <li className="set">{operand ? round(operand * modifier) : "No Weights"}
                                    <span className="reps">~ 10</span>
                                </li>
                            </>
                        })}
                    </ul>
                </div>



            </section>
            
        </>
    );
}

export default PlanTwo;