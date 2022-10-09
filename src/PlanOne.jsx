import { useState } from "react"

const PlanOne = (props) => {

    const { split, liftAmount, workout, round } = props;

    const PARAMS = [
        [0.65, 0.75, 0.85],
        [0.70, 0.80, 0.90],
        [0.75, 0.85, 0.95],
    ]

    let REPS = [
        5, 5, 5
    ]

    let index = 0;

    // Change rep amounts based on split parameter
    if (split === 2) {
        REPS = [3, 3, 3]
        index = 1;
    }
    else if (split === 3) {
        REPS = [5, 3, 1]
        index = 2;
    }

    // console.log(PARAMS[0])

    // let index = 0;
    return (
        <div className="program">

            <h3 className="program-title">{workout}</h3>
            <ul>
                {PARAMS[index].map((elem, index) => {
                    return <li>{round(liftAmount[workout] * elem)} 
                        <span className="reps">
                            1x{REPS[index]}
                        </span>
                    </li>
                })}
                <li>
                    {round(liftAmount[workout] * PARAMS[index][0])} 
                    <span className="reps">
                        5x5
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default PlanOne;