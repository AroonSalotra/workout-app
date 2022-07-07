const Lifts = (props) => {

    // const calcRoutine = (value, operand) => {
    //     const result = value * operand
    //     return props.round(result)
    // }

    const calcRoutine = (operand, week, [...args]) => {

        let result = []
        let reps = []

        switch (week) {
            case 1:
                reps.push(5)
                break;
            case 2:
                reps.push(3)
                break;
            case 3:
                reps.push(5, 3, 1)
                break;
            default:
                reps.push("undefined")
        }

        for (let a = 0; a < args.length; a++) {
            for (let b = 0; b < reps.length; b++) {
            }
            result.push(<li key={args[a]}>{props.round(operand * args[a])} <span className="reps">1x{reps}</span>  </li>)
        }
        return <ul>{result}</ul>
    }


    return (
        <div>
            {calcRoutine(props.operand, props.week, props.args)}
        </div>
    );
}

export default Lifts;