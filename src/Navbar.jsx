import Dropdown from "./Dropdown";
import { Link } from 'react-router-dom';
import { useState } from "react";

const Navbar = (props) => {

    const [display, setDisplay] = useState("opacity-none")
    const [position, setPosition] = useState(null)

    const data = [
        { text: "Home", redirect: "/workout-app/home", id: 3 },
        { text: "Barbell", redirect: "/workout-app/plan-1", id: 1 },
        { text: "Dumbell", redirect: "/workout-app/plan-2", id: 2 },
    ]

    const handleClick = (e) => {
        // (e.target.id === "Barbell" ? props.setPlan("5/3/1 Beginner") : props.setPlan("PPL Beginner"))
        // console.log(e.target.id)

        if (e.target.id === "Barbell") {
            props.setPlan("5/3/1 Beginner")
            setPosition("link-one")
            setDisplay("")
        } else {
            props.setPlan("PPL Beginner")
            setPosition("link-two")
        }
    }
    return (
        <>
            <nav className="navbar-container">
                <h1 className="height-s">Workout App</h1>
                <p >Choose a plan below</p>
                <div className="navbar-links">
                    {data.map(({ text, redirect, id }) => {
                        return <Link to={redirect} key={id} id={text}
                            onClick={(e) => handleClick(e)}>{text}</Link>
                    })}
                    <div className={`link-hover ${display}`} id={position} />
                </div>
            </nav>
            {/* <Dropdown handleClick={handleClick} plan={props.plan} setPlan={props.setPlan} /> */}
        </>
    );
}

export default Navbar;