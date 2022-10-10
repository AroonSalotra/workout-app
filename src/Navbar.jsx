import Dropdown from "./Dropdown";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = (props) => {

    const { display, setDisplay } = props;
    const [mobileNavbar, setMobileNavbar] = useState("")

    const data = [
        // { text: "Home", redirect: "/workout-app/home" },
        { text: "Barbell", redirect: "/workout-app/plan-1" },
        { text: "Dumbell", redirect: "/workout-app/plan-2" },
        { text: "Bodyweight", redirect: "/workout-app/plan-3" },
    ]

    const handleClick = () => {
        display === "none" ? setDisplay("block") : setDisplay("none")
    }

    const handleNavbar = () => {
        mobileNavbar === "" ?
            setMobileNavbar("show") : setMobileNavbar("")
    }


    // console.log(Object.values(mobileNavbar))

    return (
        <>
            <nav className="navbar-container">
                {/* <div className="navbar-links"> */}

                <span
                    className="navbar-mobile"
                    onClick={() => handleNavbar()}>
                    <GiHamburgerMenu />
                </span>

                <div
                    className={`navbar-content ${mobileNavbar}`}>
                    {data.map(({ text, redirect, id }) => {
                        return <Link
                            to={redirect}
                            key={text} 
                            d={text}>
                            {text}
                        </Link>

                    })}
                </div>
                {/* <span className="calculator-container">
                        <button onClick={() => handleClick()}>
                            Calculator
                        </button>
                    </span> */}
                {/* </div> */}
            </nav>
        </>
    );
}

export default Navbar;