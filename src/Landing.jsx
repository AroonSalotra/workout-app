import { Link } from "react-router-dom";
import Background from "./Background";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"

const Landing = (props) => {

    const DATA = [
        {
            name: "barbell",
            imgUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            redirect: "/workout-app/plan-1",
            text: "3 Day week program utilising the progressive overload method",
            difficulty: 2
        },
        {
            name: "dumbell",
            imgUrl: "https://images.unsplash.com/photo-1609899517237-77d357b047cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            redirect: "/workout-app/plan-2",
            text: "5 Day program, push - pull - legs",
            difficulty: 1
        },
        {
            name: "bodyweight",
            imgUrl: "https://images.unsplash.com/photo-1626444231642-6bd985bca16a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
            redirect: "/workout-app/plan-3",
            text: "Convenient exercises for home or outdoor use",
            difficulty: 1
        }
    ]

    return (
        <div className="wrapper-landing">
            <h1
                className="title">
                Choose your plan</h1>

            {DATA.map(({ name, imgUrl, redirect, text, difficulty }) => {

                return <Link
                    to={redirect}
                    key={name}
                    className="landing">

                    <img src={imgUrl}
                        className="landing-img"
                        alt="" />

                    <div
                        className="landing-body"
                        id={name}>

                        <button type="button"
                            className="landing-btn">
                            {name} Routine</button>

                        <p
                            className="landing-text">
                            {text}</p>


                        {difficulty === 1 ?
                            <span className="icon-row">
                                <p>Entry Barrier:</p>
                                <BsStarFill /> <BsStar /><BsStar />
                            </span>
                            :
                            <span className="icon-row">
                                <p>Entry Barrier:</p>
                                <BsStarFill /><BsStarFill /><BsStar />
                            </span>
                        }

                    </div>

                </Link>
            })}
        </div>
    );
}

export default Landing;