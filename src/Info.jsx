import { BiBorderOuter } from "react-icons/bi";

const Info = (props) => {

    const handleClick = () => {
        (props.display === "block" ? props.setDisplay("none") : props.setDisplay("block"))
    }
    return (
        <div className="info">
            <h1 id="infoHeader">Program Information</h1>
            <h2 id="infoSubtitle">5/3/1 - 3 Day Program</h2>
            <p id="infoDesc">Each day, pick a push or pull day and follow the lifts
                a week is finished once you have ran 3 days for that week, alternating between push and pull days
                alongside these main lifts, you will be expected to run a set of "assistance" reps.</p>
            <div className="info-link">
                {/* <p>To find out your calories, press this icon</p> */}
                {/* <BiBorderOuter className="icon-m" id="btn-calc" onClick={() => handleClick()} /> */}
                <p>To find out your calories, press <span onClick={() => handleClick()} className="link">here</span> </p>
            </div>
        </div>
    );
}

export default Info;