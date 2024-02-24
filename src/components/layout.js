import { useContext } from "react"
import { displayContext } from "../context"
const arr = [[1, 2, 3, "+"], [4, 5, 6, "-"], [7, 8, 9, "*"], ["=", "CE", "✖️", "%"]]

const EachButton = ({ button }) => {
const {setInput,setOutput,input}=useContext(displayContext)


    return (
        button.map((button,index) =>
            index===3?<div key={button} className="buttons" onClick={()=>{setInput([...input,button]);console.log(index);}}>{button}</div>:<div key={button} className="buttons" onClick={()=>{setInput([...input,button]);console.log(index);}}>{button}</div>
    )
    )
}

const Eachrow = () => {
    return (
        arr.map((row) =>
            <div key={row[0]} className="row"><EachButton button={row} /></div>
        )
    )

}

export const Layout = () => {
    return (
        <>
            <div className="buttonPart">
                <Eachrow />
            </div>
        </>
    )
}