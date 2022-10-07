import { Link } from "react-router-dom";

const Landing = (props) => {

    const DATA = [
        {
            name: "barbell",
            imgUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            redirect: "/workout-app/plan-1",
            text: "3 Day week program utilising the progressive overload method"
        },
        {
            name: "dumbell",
            imgUrl: "https://images.unsplash.com/photo-1609899517237-77d357b047cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            redirect: "/workout-app/plan-2",
            text: "5 Day program, push - pull - legs"
        },
        {
            name: "bodyweight",
            imgUrl: "https://images.unsplash.com/photo-1626444231642-6bd985bca16a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
            redirect: "/workout-app/plan-1",
            text: "Convenient exercises for home or outdoor use"

        }
    ]

    return (
        <>
            <h1>Choose your plan</h1>
            <div className="wrapper-landing">
                {DATA.map(({ name, imgUrl, redirect, text }) => {
                    return <Link to={redirect}
                        key={name} >
                        <img src={imgUrl}
                            className="landing-img"
                            alt="" />
                        <div className="landing-body"
                            id={name}>
                            <h2 className="landing-title">
                                {name} Routine</h2>
                            <p className="landing-text">{text}</p>
                        </div>
                    </Link>
                })}
            </div>
        </>
    );
}

export default Landing;