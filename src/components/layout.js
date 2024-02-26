import { useContext } from "react"
import { displayContext } from "../context"
import { calculate } from "../utils/calcOperations"
const arr = [[1, 2, 3, "+"], [4, 5, 6, "-"], [7, 8, 9, "*"], ["=", 0, "%"]]
let in1 = []
let in2 = []
let Opeartor
let switcher = true

const EachButton = ({ buttons }) => {
    const { setInput, setOutput, input, output } = useContext(displayContext)

    return (
        buttons.map((button, index) => {
            if (button !== "=") {
                return (
                    index !== buttons.length - 1 ?
                        <div key={button} className="buttons" onClick={() => { switcher ? in1.push(button) : in2.push(button); input.push(button); setInput([...input]); }}>{button}</div> :
                        <div key={button} className="buttons" onClick={() => { switcher = false; input.push(button); setInput([...input]); Opeartor = button; }}>{button}</div>
                )
            }
            else {
                return (
                    <div key={button} className="buttons" onClick={() => { setOutput(calculate(in1.join(""), in2.join(""), Opeartor)); }}>{button}</div>
                )
            }
        }
        )
    )
}

const Eachrow = () => {
    return (
        arr.map((row) =>
            <div key={row[0]} className="row"><EachButton buttons={row} /></div>
        )
    )

}

export const Layout = () => {
    return (
        <>
            <div className="buttonPart">
                <Eachrow />
            </div>
        </>
    )
}