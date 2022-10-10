import { useEffect } from "react";
import { useState } from "react";

const TrainingMax = (props) => {
    const { id, liftType, title, liftAmount, setLiftAmount } = props
    const [numValue, setNumValue] = useState(0)

    const handleChange = (e) => {
        const stateClone = liftAmount;
        stateClone[title] = (e.target.value)
        // Update State
        setLiftAmount({
            ...liftAmount,
            title: e.target.value
        })
        return setNumValue(e.target.value)
    }

    return (
        <div>
            <p className="training-max">{title}</p>
            <input
                type="number"
                name={title}
                id={props.id}
                value={liftAmount[title]}
                onChange={(e) => handleChange(e)}
                className="training-max-input" />

        </div>
    );
}

export default TrainingMax;