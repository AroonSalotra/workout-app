import Dropdown from "./Dropdown";
import { Link } from 'react-router-dom';
import { useState } from "react";

const Navbar = (props) => {

    const [display, setDisplay] = useState("ler")
    const [position, setPosition] = useState(null)

    const data = [
        { text: "Barbell", redirect: "/workout-app/plan-1", id: 1 },
        { text: "Dumbell", redirect: "/workout-app/plan-2", id: 2 },
    ]

    const handleClick = (e) => {
        // (e.target.id === "Barbell" ? props.setPlan("5/3/1 Beginner") : props.setPlan("PPL Beginner"))
        // console.log(e.target.id)

        if (e.target.id === "Barbell") {
            props.setPlan("5/3/1 Beginner")
            setPosition("link-one")
        } else {
            props.setPlan("PPL Beginner")
            setPosition("link-two")
        }
    }

    return (
        <>
            <div className="navbar-container">
                <h1>Workout App</h1>
                <div className="navbar-links">
                    {data.map(({ text, redirect, id }) => {
                        return <Link to={redirect} key={id} id={text} className={display}
                            onClick={(e) => handleClick(e)}>{text}</Link>
                    })}
                    <div className={`link-hover`} id={position}></div>
                </div>
            </div>
            {/* <Dropdown handleClick={handleClick} plan={props.plan} setPlan={props.setPlan} /> */}
        </>
    );
}

export default Navbar;