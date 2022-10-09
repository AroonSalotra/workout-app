import PlanTwo from "./PlanTwo";
import Background from "./Background";

const PlanTwoDisplay = (props) => {
    const { liftAmount, round } = props

    return (
        <>
            <PlanTwo
                day={"A"}
                liftAmount={liftAmount}
                round={round}
            />
            <PlanTwo
                day={"B"}
                liftAmount={liftAmount}
                round={round}
            />
            <Background
                imgUrl={"https://images.unsplash.com/photo-1609899517237-77d357b047cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"}
            />

            <div className="description"
                style={{ maxWidth: "30%" }} >
                <p>
                    Pick a row to start (squat + bench) or (overhead press & deadlift).
                    A week is completed when you have cycled back to the first row
                    (Day 1: Squat, Bench), (Day 3: Overhead, Deadlift), (Day 5: Squat, Bench repeat). Once a week is finished, increase the split which will adjust your reps and sets accordingly.
                </p>
            </div>
        </>
    );
}

export default PlanTwoDisplay;