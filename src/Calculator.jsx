import { useState } from "react";


const Calculator = (props) => {
    const [age, setAge] = useState("")
    const [weight, setWeight] = useState("")
    const [sex, setSex] = useState("")
    const [height, setHeight] = useState(null)
    const [result, setResult] = useState("")

    const [display, setDisplay] = useState("none")


    const handleChange = (event) => {

        let targetState;

        switch (event.target.id) {
            case "age":
                targetState = setAge;
                break;
            case "weight":
                targetState = setWeight
                break;
            case "male":
                return setSex("Male")
            // break;
            case "female":
                return setSex("Female")
            // break
            default:
                console.log("error")
        }
        targetState(event.target.value.slice(0, 3))
    }

    const handleClick = () => {
        // Formula
        // Women BMR = 655 + (9.6 X weight in kg) + (1.8 x height in cm) – (4.7 x age in yrs)
        // Men BMR = 66 + (13.7 X weight in kg) + (5 x height in cm) – (6.8 x age in yrs)
        let operand1;
        let operand2;
        let operand3;
        let operand4;

        switch (sex) {
            case "Female":
                operand1 = 655;
                operand2 = 9.6;
                operand3 = 1.8;
                operand4 = 4.7;
                break;
            case "Male":
                operand1 = 66
                operand2 = 13.7;
                operand3 = 5;
                operand4 = 6.8;
                break;
            default:
                return null
        }
        let formula = operand1 + (operand2 * weight) + (operand3 * height) - (operand4 * age) + 100
        setResult(formula.toFixed(0))

            // return setDisplay("flex")

            (display === "none" ? setDisplay("flex") : null)
    }

    const changeHeight = (event) => {
        setHeight(event.target.value)
    }

    const changeNumber = (type, value, target) => {

        let result;

        switch (type) {
            case "subtract":
                result = target - value
                break;
            case "add":
                // return target + value
                result = +target + +value
                break;
            default:
                return null
        }
        return result
    }

    return (
        <div className="calculator" style={{ display: props.display }}>
            <h3 className="subTitle">Calorie Calculator</h3>
            <form action="" className="rep-static">
                <input type="radio" name="sex" id="male" onChange={handleChange} />
                <label htmlFor="male">Male</label>
                <input type="radio" name="sex" id="female" onChange={handleChange} />
                <label htmlFor="female">Female</label>

                <div className="age-weight">
                    <label htmlFor="female">Age</label>
                    <input type="number" name="" id="age" max={100} onChange={handleChange} />
                    <label htmlFor="female">Weight <span className="placeholder">in kg</span></label>
                    <input type="number" name="" id="weight" onChange={handleChange} />
                </div>
                <label htmlFor="height">Height <span className="placeholder">in ft</span></label>
                <div>
                    <select name="" id="height" defaultValue={"default"} onChange={changeHeight}>
                        <option value="default" disabled></option>
                        <option value={150}  >5ft</option>
                        <option value={161}>5 - 5.6 ft</option>
                        <option value={175}  >5.6 - 5.8 ft</option>
                        <option value={182}>5.8 - 6 ft</option>
                        <option value={192}>6 - 6.5ft</option>
                    </select>
                </div>
                <div>
                    <button onClick={() => handleClick()} type="button" >Calculate </button>
                </div>
            </form>
            {/* <h3>Age: {age}</h3>
            <h3>Weight: {weight}</h3>
            <h3>Sex: {sex}</h3> */}
            <div id="calories" style={{ display: display }}>
                <div id="bulk">
                    <p>Bulk</p>
                    <p> {changeNumber("add", 500, result)} </p>
                </div>
                <div id="maintain">
                    <p>Maintain</p>
                    <p>{result}</p>
                </div>
                <div id="cut">
                    <p>Cut</p>
                    <p> {changeNumber("subtract", 400, result)} </p>
                </div>
                <p className="caloriesInfo">Bulk to gain mass, Maintain to enter body recompisition, Cut to lose weight</p>
            </div>
        </div>
    );
}

export default Calculator;