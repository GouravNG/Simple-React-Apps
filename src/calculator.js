import { Heading } from "./components/commonComponents"
import { Display } from "./components/display"
import { Layout } from "./components/layout"
export const Calculator = () => {
    return (
        <>
            {/* <h1>Calculator</h1> */}
            <Heading headingName="Calculator" />
            <div className="model">
                <Display />
                <Layout />
            </div>
        </>
    )
}