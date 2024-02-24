import ReactDom from "react-dom/client"

import { Todo } from "./todo"
import { Calculator } from "./calculator"
import "./calculator.css"

const App = () => {
    return (
    <>
    <h1>Small React Projects</h1>
    {/* <Todo/> */}
    <Calculator/>
    </>
    )
}

ReactDom.createRoot(document.getElementById("root")).render(<App />)