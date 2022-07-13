import { useState } from "react";

const Indicator = () => {

    const [style, setStyle] = useState({background: "red"})
    const staticStyle = {width: "1rem", height: "1rem", marginTop: "1rem", borderRadius: "50px"}

    const handleClick = () => {
      style.background === "red" ? setStyle({background: "green"}) : setStyle({background: "red"})
    }

    return ( 
        <div style={{...staticStyle, ...style}} onClick={() => handleClick()} />
     );
}
 
export default Indicator;