const PlanTwo = (props) => {

    let squat = props.squat;
    let deadlift = props.deadlift;

    // console.log(squat)

    const handleRoutine = (day) => {
        let data;
        day === "A" ? data = handleArray(liftsAll, 1, liftsA) : data = handleArray(liftsAll, 1, liftsB)
        return <ul className="list">
            {data.map((elem) => {
                return <li key={elem}>{elem} <span className="reps">~ x 10</span> </li>
            })}
        </ul>
    }

    let liftsAll = ["Bulgarian Split Squat", "Plank"]
    let liftsA = ["Floor Press", "Straight-legged Deadlift"]
    let liftsB = ["Seated Shoulder Press, Standing Two-Dumbell Bent Over Row"]

    const handleArray = (data, index, value) => {
        let result = data;
        for (let a = 0; a < value.length; a++) {
            result.splice(index, 0, value[a])
            index++
        }
        return result
    }

    // console.log(handleArray(liftsAll, 1, liftsA))


    return (
        <>
            {handleRoutine(props.day)}
        </>
    );
}

export default PlanTwo;