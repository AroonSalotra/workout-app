const Lifts = (props) => {

    const calcRoutine = (value, operand) => {
        const result = value * operand
        return props.round(result)
    }


    return (
        <div>
            <h1>{calcRoutine(props.value, props.operand)}</h1>
        </div>
    );
}

export default Lifts;