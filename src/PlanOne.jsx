import { useState } from "react"
const PlanOne = (props) => {


    const calcRoutine = (operand, week, [...args]) => {

        let result = []
        let reps = []
        let index = 0;

        switch (week) {
            case 1:
                reps.push(5, 5, 5)
                break;
            case 2:
                reps.push(3, 3, 3)
                break;
            case 3:
                reps.push(5, 3, 1)
                break;
            default:
                reps.push("undefined")
        }

        for (let a = 0; a < args.length; a++) {
            result.push(<li key={args[a]}>{props.round(operand * args[a])} <span className="reps">1x{reps[index]}</span>  </li>)
            index++
        }

        result.push(<li key={"lastRep"} className="lastRep"> {props.round(operand * args[0])} <span className="reps">5x5</span> </li>)
        result.push(<li key={"assistance"} className="assistance">Assistance <span className="reps">~50</span> </li>)
        return <ul className="list">{result}</ul>
    }

    return (
        <>
            {calcRoutine(props.operand, props.week, props.args)}
        </>
    );
}

export default PlanOne;