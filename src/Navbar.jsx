import Dropdown from "./Dropdown";
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const handleClick = (event) => {
        props.setValue(event.target.value)
    }

    const handleWeight = () => {
    }

    console.log(props.children)


    return (
        <div>
            <Dropdown handleClick={handleClick} />
            <h2>{props.value}</h2>
            <Link to="/workout-app/plan-1">
                <h1>1</h1>
            </Link>
            <Link to="/workout-app/plan-2">
                <h1>2</h1>
            </Link>
            <button onClick={() => handleWeight()}>Change Weight</button>
        </div>
    );
}

export default Navbar;