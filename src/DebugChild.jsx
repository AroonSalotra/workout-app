import { useState } from "react";

const DebugChild = () => {
    const [style, setStyle] = useState({background: "red"})
    const staticStyle = {width: "5rem", height: "5rem", marginTop: "10px"}



    // const style = {width: "5rem", height: "5rem", backgroundColor: "red"}

    const handleClick = () => {
        // setStyle({background: "green"})
        style.background === "red" ? setStyle({background: "green", borderRadius: "50px"}) : setStyle({background: "red"})
    }

    // console.log(style.background)



    return ( 
        <div style={{...style, ...staticStyle}} onClick={() => handleClick()}>

        </div>
     );
}
 
export default DebugChild;