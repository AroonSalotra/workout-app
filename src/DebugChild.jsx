import { useState } from "react";

const DebugChild = (props) => {

    const handleClick = (event) => {
        props.setValue(event.target.value)
    }

    return (
        <div>
            <select name="" id="" onChange={handleClick}>
                <option value="">Choose a plan</option>
                <option value="plan-1">Plan 1</option>
                <option value="plan-2">Plan 2</option>
            </select>
        </div>
    );
}

export default DebugChild;