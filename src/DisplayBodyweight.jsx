import Background from "./Background";
import ProgramBodyweight from "./ProgramBodyweight";

const DisplayBodyweight = () => {

    const PROGRAM = {
        pairOne: [
            { workout: "Pull-up" },
            { workout: "Squat" },
        ],
        pairTwo: [
            { workout: "Dip" },
            { workout: "Hinge" },
        ],
        pairThree: [
            { workout: "Row" },
            { workout: "Push-up" },
        ],
        coreTriplet: [
            { workout: "Anti-Extension" },
            { workout: "Anti-Rotation" },
            { workout: "Extension" },
        ]
    }


    console.log(PROGRAM)


    return (
        <>
            <div className="wrapper-bodyweight">
                <ProgramBodyweight
                    data={PROGRAM.pairOne}
                    title={"Pair One"}
                />
                <ProgramBodyweight
                    data={PROGRAM.pairTwo}
                    title={"Pair Two"}
                />
                <ProgramBodyweight
                    data={PROGRAM.pairThree}
                    title={"Pair Three"}
                />
                <ProgramBodyweight
                    data={PROGRAM.coreTriplet}
                    title={"Core Triplet"}

                />

                <div className="description"
                    style={{ maxWidth: "40%" }} >
                    <p>
                        Adaptable program suitable for home use, these exercises should be done in pairs to save time. An example routine would be: set of exercise one, rest 90 seconds, set of exercise 2, rest 90 seconds and repeat until you have completed 3 sets of that pair
                    </p>
                </div>
            </div>

            <Background
                imgUrl={"https://images.unsplash.com/photo-1626444231642-6bd985bca16a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"} />
        </>
    );
}

export default DisplayBodyweight;