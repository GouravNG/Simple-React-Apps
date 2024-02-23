import { useContext } from "react"
import { updateContext } from "../context"

const updateTodo = (j, stateTodoData) => {
    const updatedTodoData = stateTodoData.map(todoItem => {
        if (todoItem.id === j) {
            // Return a new object with the updated isCheched value
            return {
                ...todoItem,
                isCheched: !todoItem.isCheched
            };
        } else {
            // For other items, return them as they are
            return todoItem;
        }
    });

    return updatedTodoData;
}

export const EachLine = ({ i }) => {
    const { setStateTodoData, stateTodoData } = useContext(updateContext)
    return (
        <>
            <li key={i.id}>
                <input type="checkbox" id={i.id} name={i.desc} onChange={() => { setStateTodoData(updateTodo(i.id, stateTodoData)) }} />
                {!i.isCheched ? <label htmlFor={i.id}>{i.desc}</label> : <del><label htmlFor={i.id}>{i.desc}</label></del>}
            </li>
        </>
    )
}

export const TodoLists = ({ Checked = false }) => {
    const { stateTodoData } = useContext(updateContext)
    return (
        <>
            {stateTodoData.filter((i) =>
                i.isCheched === Checked
            ).map((i) => <EachLine key={i.id} i={i} />)}
        </>
    )
}

export const TodoList = () => {
    return (
        <>
            <ol>
                <TodoLists />
            </ol>
            <hr />
            <ol>
                <TodoLists Checked={true} />
            </ol>
        </>
    )
}