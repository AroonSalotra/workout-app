import { BsCalculator } from "react-icons/bs"


const ViewPlan = (props) => {

    const handleClick = () => {
        (props.display ? props.setDisplay("") : props.setDisplay("none"))
    }

    return (
        <>
            <h2>Selected Plan: {props.plan}</h2>
            <div className="view-container">
                <p>To find your calories press here</p>
                <BsCalculator className="icon-m"
                onClick={() => handleClick()} />
            </div>
        </>
    );
}

export default ViewPlan;