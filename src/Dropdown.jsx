import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Dropdown = (props) => {

    const [display, setDisplay] = useState("")

    const handleClick = () => {
        (display == "" ? setDisplay("opacity-none") : setDisplay(""))
    }

    const testClick = () => {
        setDisplay("opacity-none")
    }

    return (
        <div className='select-container'>
            <ul className='select-list'>
                <li onClick={() => handleClick()}><h3>Select</h3></li>
                <Link to="/workout-app/plan-1" className={display} onClick={() => testClick()}>Barbell</Link>
                <Link to="/workout-app/plan-2" className={display} onClick={() => testClick()}>Dumbell</Link>
            </ul>
        </div>
    );
}

export default Dropdown;