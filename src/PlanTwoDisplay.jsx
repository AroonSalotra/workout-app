import PlanTwo from "./PlanTwo";

const PlanTwoDisplay = (props) => {
    const { liftAmount, round } = props

    return (
        <div>
            <PlanTwo day={"A"} />
            <PlanTwo day={"B"} />
        </div>
    );
}

export default PlanTwoDisplay;