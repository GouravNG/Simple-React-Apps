import { useContext } from "react"
import { updateContext } from "../context"
import { addTodo } from "../utils/todoData"

let newTodo

export const Heading = ({ headingName = "DefaultName" }) => {
    return (
        <>
            <h1>{headingName}</h1>
        </>
    )
}
export const TextBox = ({ placeHolderName = "placeholder" }) => {
    return (
        <>
            <input type="text" placeholder={placeHolderName} onChange={(e) => { newTodo = (e.target.value) }} />
        </>
    )
}
export const CustomButton = ({ buttonName = "Click me" }) => {
    const { setStateTodoData, stateTodoData } = useContext(updateContext)
    return (
        <>
            <button onClick={() => { setStateTodoData(addTodo(newTodo, stateTodoData)) }}>{buttonName}</button>
        </>
    )
}

export const InputField = ({ forName = "defaultName", labelName = "Your Input", typeName = "text", placeHolderName = "input here", }) => {
    return (
        <>
            <label htmlFor={forName}>{labelName}</label>
            <input type={typeName} id={forName} placeholder={placeHolderName} />
        </>
    )
}

export const NewCustomButton = ({ buttonName = "Click me", onClickFunctin = (() => { console.log("HI") }) }) => {
    return (
        <>
            <button onClick={onClickFunctin} >{buttonName}</button>
        </>
    )
}