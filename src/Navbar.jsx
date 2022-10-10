import Dropdown from "./Dropdown";
import { Link } from 'react-router-dom';
import { useState } from "react";

const Navbar = (props) => {

    const { display, setDisplay } = props;

    const data = [
        { text: "Home", redirect: "/workout-app/home" },
        { text: "Barbell", redirect: "/workout-app/plan-1" },
        { text: "Dumbell", redirect: "/workout-app/plan-2" },
        { text: "Bodyweight", redirect: "/workout-app/plan-3" },
        { text: "Calculator" },
    ]

    const handleClick = () => {
        display === "none" ? setDisplay("block") : setDisplay("none")
    }

    return (
        <>
            <nav className="navbar-container">
                <div className="navbar-links">
                    {data.map(({ text, redirect, id }) => {
                        return redirect ?
                            <Link
                                to={redirect}
                                key={text} i
                                d={text}>
                                {text}
                            </Link> :

                            <span onClick={() => handleClick()}>
                                {text}
                            </span>

                    })}
                </div>
            </nav>
        </>
    );
}

export default Navbar;