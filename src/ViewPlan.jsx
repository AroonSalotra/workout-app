import { BsCalculator } from "react-icons/bs"
import { BsFillInfoCircleFill } from "react-icons/bs"
import { useState } from "react"



const ViewPlan = (props) => {
    const [display, setDisplay] = useState("opacity-none")

    const infoOne = ["a cycle is once all 3 weeks are completed. after a full cycle increment your 1 Rep Max values by 2.5kg - 5kg for Squat and Deadlift, 1.25kg to 2.5kg for Bench and Overhead"]
    const infoTwo = ["after each session, increment your 1 Rep Max values by 5kg - 10kg for Deadlifts and 2.5kg - 5kg to the others "]


    const handleClick = () => {
        (props.display ? props.setDisplay("") : props.setDisplay("none"))
    }

    const handleInfo = () => {
        (display === "opacity-none" ? setDisplay("") : setDisplay("opacity-none"))
    }

    return (
        <>
            <h2>Selected Plan: {props.plan} <BsFillInfoCircleFill className="icon-m"
                onClick={() => handleInfo()} /> </h2>

            {/* <div className={display}>
                {props.plan === "5/3/1 Beginner" ?
                    <p className="info-text">3 day plan, a cycle is once all 3 weeks are completed.
                        after a full cycle increment your 1 Rep Max values by 2.5kg - 5kg
                        for Squat and Deadlift, 1.25kg to 2.5kg for Bench and Overhead</p>
                    :
                    <p className="info-text">3 day plan, 

                    </p>
                }
            </div> */}

            <p className={`${display} info-text`}>3 day plan, {props.plan === "5/3/1 Beginner" ? infoOne : infoTwo}
            </p>

            <div className="view-container">
                <p>To find your calories press here</p>
                <BsCalculator className="icon-m"
                    onClick={() => handleClick()} />
            </div>
        </>
    );
}

export default ViewPlan;