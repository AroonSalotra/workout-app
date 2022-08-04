import { Link } from 'react-router-dom';


const Dropdown = (props) => {

    // const handleClick = (event) => {
    //     props.setValue(event.target.value)
    // }

    return ( 
        <div>
            <Link to="/workout-app/plan-1"></Link>
            <Link to="/workout-app/plan-2"></Link>
        </div>
     );
}
 
export default Dropdown;