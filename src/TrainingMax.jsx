
const TrainingMax = (props) => {
    return (
        <div className="inputContainer">
            <p className="inputText">{props.id}</p>
            <input type="number" name="" id={props.id} value={props.liftType}
                onChange={(e) => props.handleChange(e)} />
            {/* <p>{props.round(props.liftType)} </p> */}
        </div>
    );
}

export default TrainingMax;