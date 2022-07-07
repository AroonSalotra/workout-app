import { useState } from "react"

const DebugComponent = () => {
    const debuFunc = (operand, [...args]) => {

        // return <h1>{result}</h1>
        for (let a = 0; a < args.length; a++) {
            console.log(operand + args[a])
        }
    }

    let arr = [5,6,7]

    return (
        <div>
            <h1>Debug</h1>
            {debuFunc(10, [5,6,7])}
        </div>
    )
}

export default DebugComponent;