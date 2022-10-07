import PlanTwo from "./PlanTwo";

const PlanTwoDisplay = (props) => {
    const { liftAmount, round } = props

    const PROGRAM = [
        {
            day: "A"
        },
        {
            day: "B"
        }
    ]

    return (
        <div>
            {PROGRAM.map(({ day }) => {
                return <PlanTwo key={day}
                    day={day}
                    squat={liftAmount.squat}
                    deadlift={liftAmount.deadlift}
                    overhead={liftAmount.overhead}
                    bench={liftAmount.bench}
                    round={round}
                />
            })}
        </div>
    );
}

export default PlanTwoDisplay;