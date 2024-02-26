import ReactDom from "react-dom/client"

import { Todo } from "./todo"
import { Calculator } from "./calculator"
import { Country } from "./countryWeb"


const App = () => {
    return (
    <>
    <h1>Small React Projects</h1>
    {/* <Todo/> */}
    {/* <Calculator/> */}
    <Country/>
    </>
    )
}

ReactDom.createRoot(document.getElementById("root")).render(<App />)