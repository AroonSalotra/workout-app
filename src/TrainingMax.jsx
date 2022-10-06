import { useEffect } from "react";
import { useState } from "react";

const TrainingMax = (props) => {
    const { id, liftType, title, liftAmount, setLiftAmount } = props
    const [numValue, setNumValue] = useState(0)

    const handleChange = (e) => {
        const stateClone = liftAmount;
        // stateClone[title] = JSON.parse(e.target.value)
        stateClone[title] = (e.target.value)
        // setLiftAmount(stateClone)
        setLiftAmount({
            ...liftAmount,
            title: e.target.value
        })
        // console.log(liftAmount)
        return setNumValue(e.target.value)
    }


    // console.log(liftAmount[title])

    return (
        <div className="inputContainer">
            <p className="inputText">{title}</p>
            <input
                type="number"
                name={title}
                id={props.id}
                value={numValue}
                onChange={(e) => handleChange(e)} />
        </div>
    );
}

export default TrainingMax;