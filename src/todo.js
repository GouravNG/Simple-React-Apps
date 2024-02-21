import { TodoList } from "./components/todoLists"
import { Heading, CustomButton, TextBox } from "./components/commonComponents"
export const Todo = () => {

    return (
        <div style={{ backgroundColor: "yellow" }}>
            <hr />
            <Heading headingName="Todo-Lists" />
            <TextBox placeHolderName="add your next todo" />
            <CustomButton buttonName="ADD" />
            <TodoList />
            <hr />
            <TodoList />
            <hr />
        </div>

    )
}