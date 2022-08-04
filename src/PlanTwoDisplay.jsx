import PlanTwo from "./PlanTwo";

const PlanTwoDisplay = (props) => {
    return (
        <div className="trainingWeek">
            <h2 className="subTitle">Split One</h2>
            <div className="trainingWeek">
                <PlanTwo day="A" squat={props.squat} />
            </div>
            <div className="trainingWeek">
                <h2 className="subTitle">Split Two</h2>
                <PlanTwo day="B" />
            </div>
        </div>
    );
}

export default PlanTwoDisplay;