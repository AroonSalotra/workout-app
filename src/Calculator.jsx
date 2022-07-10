import { useState } from "react";


const Calculator = () => {
    const [age, setAge] = useState("")
    const [weight, setWeight] = useState("")
    const [sex, setSex] = useState("")


    // Formula
    // Women BMR = 655 + (9.6 X weight in kg) + (1.8 x height in cm) – (4.7 x age in yrs)
    // Men BMR = 66 + (13.7 X weight in kg) + (5 x height in cm) – (6.8 x age in yrs)

    const handleChange = (event) => {

        let targetState;
        let state;
        let result = []

        switch (event.target.id) {
            case "age":
                targetState = setAge;
                state = age
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




    return (
        <div className="calculator">
            <h3>Calorie Calculator</h3>
            <form>
                <input type="radio" name="sex" id="male" onChange={handleChange} />
                <label htmlFor="male">Male</label>
                <input type="radio" name="sex" id="female" onChange={handleChange} />
                <label htmlFor="female">Female</label>
                <div>
                    <label htmlFor="female">Age</label>
                    <input type="number" name="" id="age" max={100} onChange={handleChange} />
                    <label htmlFor="female">Weight <em>in lbs</em> </label>
                    <input type="number" name="" id="weight" onChange={handleChange} />
                </div>
                <label htmlFor="height">Height <em>in cm</em> </label>
                <div>
                    <select name="" id="height">
                        <option value="">5ft</option>
                        <option value="">5 - 5.6 ft</option>
                        <option value="">5.6 - 5.8 ft</option>
                        <option value="">5.8 - 6 ft</option>
                        <option value="">6 - 6.5ft</option>
                    </select>
                </div>
                {/* <button>Submit</button> */}
                <div>
                    <button>Calculate</button>
                </div>
            </form>
            <h3>Age: {age}</h3>
            <h3>Weight: {weight}</h3>
            <h3>Sex: {sex}</h3>
        </div>
    );
}

export default Calculator;