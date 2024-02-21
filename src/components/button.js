import { addtodoData } from "../utils/todoData"
export const Button = ({ nameOfButton = "Click Me" }) => {
    return (
        <>
            <button onClick={() => {
                addtodoData({
                    id: 4,
                    isChecked: false,
                    desc: "Shopping list"
                })
            }}>{nameOfButton}</button>
        </>
    )
}