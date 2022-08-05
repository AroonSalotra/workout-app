import PlanTwo from "./PlanTwo";

const PlanTwoDisplay = (props) => {
    return (
        <div className="plan-two-container">
            <div className="trainingWeek">
                <h2 className="subTitle">Split One</h2>
                <PlanTwo day="A" squat={props.squat} deadlift={props.deadlift} overhead={props.overhead} round={props.round} bench={props.bench} />
            </div>

            <div className="trainingWeek">
                <h2 className="subTitle">Split Two</h2>
                <PlanTwo day="B" squat={props.squat} deadlift={props.deadlift} overhead={props.overhead} round={props.round} bench={props.bench}/>
            </div>
        </div>
    );
}

export default PlanTwoDisplay;