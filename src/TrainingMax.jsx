import { useState } from 'react';

const TrainingMax = (props) => {
    return (
        <div>
            <p>{props.id}</p>
            <input type="number" name="" id={props.id} value={props.liftType}
                onChange={(e) => props.handleChange(e)} />
            <p>{props.round(props.liftType)} </p>
        </div>
    );
}

export default TrainingMax;