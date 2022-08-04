import Dropdown from "./Dropdown";
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const handleClick = (event) => {
        props.setValue(event.target.value)
    }

    const handleRoute = () => {
         <Link to="/"></Link>
    }

    return (
        <div>
            <Dropdown handleClick={handleClick} />
            <h2>{props.value}</h2>
            <button onClick={() => handleRoute()}>LINK</button>
            <Link to="/workout-app/plan-1">
                <h1>1</h1>
            </Link>
            <Link to="/workout-app/plan-2">
                <h1>2</h1>
            </Link>
        </div>
    );
}

export default Navbar;