import { Heading } from "./components/heading"
import { TodoList } from "./components/todoList"
import { Bar } from "./components/bar"
import { Button } from "./components/button"
const Todo=()=>{
    return(
        <>
        <Heading headingName="Todo-Lists"/>
        <div>
            <Bar placeHolderName="Add ur new todo here"/>
            <Button nameOfButton="Add Your Todo"/>
            <TodoList/>
            <hr/>
            <TodoList type={true}/>
        </div>
        </>
    )
}

export default Todo