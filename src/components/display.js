import { useContext } from "react"
import { displayContext } from "../context"
export const Display = () => {
const{input,output}=useContext(displayContext)
    return (
        <>
            <div className="displayField">
                <h3>{input}</h3>
                <h1>{output}</h1>
            </div>
        </>
    )
}