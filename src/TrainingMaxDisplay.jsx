import TrainingMax from "./TrainingMax";
import { useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs"

const TrainingMaxDisplay = (props) => {

    const { liftAmount, setLiftAmount } = props;

    const [display, setDisplay] = useState("opacity-none")

    const handleClick = () => {
        (display === "" ? setDisplay("opacity-none") : setDisplay(""))
    }

    const DATA = [
        { title: "squat" },
        { title: "bench" },
        { title: "deadlift" },
        { title: "overhead" },
    ]

    return (
        <>
            <div className="wrapper-input">
                <h2 className="subtitle">Training Max
                    <BsFillInfoCircleFill className="icon-m"
                        onClick={() => handleClick()} />
                </h2>
                <p className={display}>
                    To calculate your 1 Rep Max, perform each lift at the highest
                    weight you feel you can lift for 1 successful rep</p>
                <div className="trainingMax">
                    {DATA.map(({ title }) => {
                        return <TrainingMax
                            key={title}
                            round={props.round}
                            title={title}
                            liftAmount={liftAmount}
                            setLiftAmount={setLiftAmount}
                        />
                    })}
                </div>
            </div>
        </>
    );
}

export default TrainingMaxDisplay;