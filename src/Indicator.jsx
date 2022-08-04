import { useState } from "react";

const Indicator = () => {

    const [style, setStyle] = useState({background: ""})
    // const staticStyle = {width: "1rem", height: "1rem", marginTop: "1rem", borderRadius: "50px"}

    const handleClick = () => {
      style.background === "green" ? setStyle({background: "#638488"}) : setStyle({background: "green"})
    }

    return ( 
        // <div style={{...staticStyle, ...style}} onClick={() => handleClick()} className="indicator" />
        <div style={style} onClick={() => handleClick()} className="indicator" />
     );
}
 
export default Indicator;