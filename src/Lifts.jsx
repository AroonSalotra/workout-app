const Lifts = (props) => {

    // const calcRoutine = (value, operand) => {
    //     const result = value * operand
    //     return props.round(result)
    // }

    const calcRoutine = (operand, [...args]) => {

        let result = []

        for (let a = 0; a < args.length; a++) {
            // result.push(<p key={args[a]}>{props.round(operand * args[a])}</p>)
            result.push(<li key={args[a]}>{props.round(operand * args[a])}</li>)
        }
        return <ul>{result}</ul>
    }


    return (
        <div>
            {/* <p>{calcRoutine(props.operand, props.args)}</p> */}
            {calcRoutine(props.operand, props.args)}
        </div>
    );
}

export default Lifts;