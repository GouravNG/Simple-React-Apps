import { useState } from "react";
import { todoData } from "../utils/todoData";

const TodoLists = ({ type }) => {
    let [check,setCheck]=useState(true)
    return (
        <>
            {
                todoData.filter((i) => (i.isChecked === type))
                    .map((i) =>
                        <li key={i.id}>
                            {type ? <del>{i.desc}</del> : i.desc}
                            <button onClick={()=>setCheck()}>[{i.isChecked ? "✔️" : " "}]</button>
                        </li>)
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