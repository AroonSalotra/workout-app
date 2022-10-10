import ProgramDumbell from "./ProgramDumbell";
import Background from "./Background";

const DisplayDumbell = (props) => {
    const { liftAmount, round } = props

    return (
        <>
            {/* <h1>PPL (Push Pull Legs)</h1> */}
            <ProgramDumbell
                day={"A"}
                liftAmount={liftAmount}
                round={round}
            />
            <ProgramDumbell
                day={"B"}
                liftAmount={liftAmount}
                round={round}
            />
            <Background
                imgUrl={"https://images.unsplash.com/photo-1609899517237-77d357b047cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"}
            />

            <div className="description"
                style={{ maxWidth: "30%" }} >
                <p>
                    2 Split program, intended to be run as a 3 day program.
                    After each session - increase your training max values by
                    2.5 - 5kg and 5 - 10kg for deadlift
                </p>
            </div>
        </>
    );
}

export default DisplayDumbell;