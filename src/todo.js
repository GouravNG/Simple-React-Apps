import { TodoList } from "./components/todoLists"
import { Heading, CustomButton, TextBox } from "./components/commonComponents"
import { todoData } from "./utils/todoData"
import { updateContext } from "./context"
import { useState } from "react"
export const Todo = () => {
    const [stateTodoData, setStateTodoData] = useState(todoData)
    return (
        <div style={{ backgroundColor: "yellow" }}>
            <hr />
            <Heading headingName="Todo-Lists" />
            <updateContext.Provider value={{ stateTodoData, setStateTodoData}}>
                <TextBox placeHolderName="add your next todo" />
                <CustomButton buttonName="ADD" />
                <TodoList />
                <hr />
                <button onClick={()=>{console.log(stateTodoData)}}>Test</button>
            </updateContext.Provider>
        </div>

    )
}