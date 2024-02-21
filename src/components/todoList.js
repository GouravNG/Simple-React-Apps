import { useState } from "react";
import { todoData } from "../utils/todoData";

const EachLine = ({ id, desc, isChecked, type }) => {
    let [check, setCheck] = useState(isChecked)
    return (
        <li key={id}>
            {check ? <del>{desc}</del> : desc}
            <button onClick={() => setCheck(!check)}>[{check ? "✔️" : " "}]</button>
        </li>)
}

const TodoLists = ({ type }) => {
    return (
        <>
            {
                todoData.filter((i) => (i.isChecked === type))
                    .map((i) => <EachLine id={i.id} desc={i.desc} isChecked={i.isChecked} type={type} />)
            }
        </>
    )
}

export const TodoList = ({ type = false }) => {
    return (
        <>
            <ul>
                <TodoLists type={type} />
            </ul>
        </>
    )
}