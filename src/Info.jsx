// import { BiBorderOuter } from "react-icons/bi";
import { BsFillInfoCircleFill } from "react-icons/bs"

import { useState } from "react";


const Info = (props) => {
    const [display, setDisplay] = useState("none")

    const handleClick = () => {
        (props.display === "block" ? props.setDisplay("none") : props.setDisplay("block"))
    }

    const handleClick2 = () => {
      (display === "block" ? setDisplay("none") : setDisplay("block") )
    }



    return (
        <div className="info">
            <h1 id="infoHeader">Program Information  <BsFillInfoCircleFill onClick={() => handleClick2()} className="icon-m"  /> </h1>
            <h2 id="infoSubtitle">5/3/1 - 3 Day Program</h2>
            {/* <p id="infoDesc">Each day, pick a push or pull day and follow the lifts
                a week is finished once you have ran 3 days for that week, alternating between push and pull days
                alongside these main lifts, you will be expected to run a set of "assistance" reps.</p> */}
            <div className="info-link">
                {/* <p>To find out your calories, press this icon</p> */}
                {/* <BiBorderOuter className="icon-m" id="btn-calc" onClick={() => handleClick()} /> */}
                <p>To find out your calories, press <span onClick={() => handleClick()} className="link">here</span> </p>
                <div id="infoPopup" style={{display: display}}>
                <h2>How to run</h2>
                <p>enter your 1RM (One Rep Max) in the boxes, you will then see your numbers
                for the program. Every last set is AMAP (As many reps as possible)
                for assistance, pick any amount of exercise to reach 100 total reps</p>
                </div>
            </div>
        </div>
    );
}

export default Info;