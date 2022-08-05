import { useId } from "react";

const PlanTwo = (props) => {

    // console.log(squat)

    const handleRoutine = (day) => {
        return <div>
            {(day === "A" ? handleArray(newLiftsAll, 1, newLiftsA) : handleArray(newLiftsAll, 1, newLiftsB))
                .map((elem) => {
                    return <div>
                        <h3 className="subTitle">{elem.type}</h3>
                        <p className="rep">{elem.lift ? props.round(elem.lift / elem.operand) : "No Weights"}
                            <span className="reps">~ x 10</span></p>
                    </div>
                })
            }
        </div>
    }

    let newLiftsAll = [
        { type: "Bulgarian Split Squat", lift: props.squat, operand: 3.5, id: 1 },
        { type: "Plank", lift: null, id: 2 }
    ]

    let newLiftsA = [
        { type: "Floor Press", lift: null, id: 3 },
        { type: "Straight-Legged Deadlift", lift: props.deadlift, operand: 1.75, id: 4 }
    ]

    let newLiftsB = [
        { type: "Seated Shoulder Press", lift: props.overhead, operand: 2.75, id: 5 },
        { type: "Bent Over Row", lift: props.bench, operand: 3, id: 6 }
    ]

    const handleArray = (data, index, value) => {
        let result = data;
        for (let a = 0; a < value.length; a++) {
            result.splice(index, 0, value[a])
            index++
        }
        return result
    }

    return (
        <>
            {handleRoutine(props.day)}
        </>
    );
}

export default PlanTwo;