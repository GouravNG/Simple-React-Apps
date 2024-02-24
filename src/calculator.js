import { useState } from "react"
import { Heading } from "./components/commonComponents"
import { Display } from "./components/display"
import { Layout } from "./components/layout"

import { displayContext } from "./context"

export const Calculator = () => {
    const [input, setInput] = useState([])
    const [output, setOutput] = useState("and to your questions")
    return (
        <>
            {/* <h1>Calculator</h1> */}
            <Heading headingName="Calculator" />
            <div className="model">
                <displayContext.Provider value={{ input, setInput, output, setOutput }}>
                    <Display />
                    <Layout />
                </displayContext.Provider>
            </div>
        </>
    )
}