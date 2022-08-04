const PlanTwo = (props) => {

    const handleRoutine = (day) => {
        let reps = <p className="rep">* x10</p>

        return <div className="trainingWeek">
            <h3 className="subTitle2">{day == "A" ? "Split A" : "Split B"}</h3>
            <div className="trainingDay">
                <h3 className="subTitle">Bulgarian Split Squat / Lunge</h3>{reps}

                {day === "A" ?
                    <>
                        <h3 className="subTitle">Floor Press</h3>{reps}
                        <h3 className="subTitle">Straight-legged Deadlift</h3>{reps}
                    </>
                    :
                    <>
                        <h3 className="subTitle">Seated Shoulder Press</h3>{reps}
                        <h3 className="subTitle">Standing two-dumbell bent over row</h3>{reps}
                    </>
                }

                <h3 className="subTitle">Plank</h3>{reps}
            </div>
        </div>
    }


    return (
        <>
            {handleRoutine(props.day)}
        </>
    );
}

export default PlanTwo;