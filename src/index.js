import ReactDom from "react-dom/client"

import Todo from "./todo"

const App = () => {
    return (
        <>
            <h1>Small React Projects</h1>
            <Todo/>
        </>
    )
}

ReactDom.createRoot(document.getElementById("root")).render(<App />)