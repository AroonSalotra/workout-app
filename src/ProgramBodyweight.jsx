const ProgramBodyweight = (props) => {

    const { data, title } = props;

    let reps = "5 - 8"

    console.log()

    if (data.length > 2) reps = "8 - 12"

    return (
        <>
            <h2 className="subtitle">{title}</h2>
            <div className="program bodyweight-container">
                <ul>
                    {data.map(({ workout }) => {
                        return <div>
                            <h3 className="program-title">{`${workout} progression`}</h3>
                            <li className="set">3 x {reps}</li>
                        </div>
                    })}
                </ul>
            </div>
        </>
    );
}

export default ProgramBodyweight;