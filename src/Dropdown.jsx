import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowDown } from "react-icons/ai"

const Dropdown = (props) => {

    const [display, setDisplay] = useState("link-")

    const [barbell, setBarbell] = useState(null)
    const [dumbell, setDumbell] = useState(null)

    const handleClick = () => {
        (display == "" ? setDisplay("opacity-none") : setDisplay(""))
    }

    const testClick = () => {
        setDisplay("opacity-none")
    }

    const handleState = (e) => {
        (e.target.id == "slct-barbell" ? props.setPlan("5/3/1 Beginner") : props.setPlan("PPL Beginner"))
    }

    return (
        <div className='select-container'>
            <ul className='select-list'>
                <li onClick={() => handleClick()} key={"select"}>
                    <h3 className="select-btn">Change Program<AiOutlineArrowDown /></h3>
                </li>

                <Link to="/workout-app/plan-1" key={"link1"} className={`${display} link`}
                    onClick={(e) => { testClick(); handleState(e) }} id="slct-barbell">
                    Barbell Routine</Link>

                <Link to="/workout-app/plan-2" key={"link2"} className={`${display} link`}
                    onClick={(e) => { testClick(); handleState(e) }} id="slct-dumbell">
                    Dumbell Routine</Link>
            </ul>
        </div>
    );
}

export default Dropdown;