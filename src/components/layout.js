const arr = [[1, 2, 3, "+"], [4, 5, 6, "-"], [7, 8, 9, "X"], ["=", "CE", "✖️", "%"]]


const EachButton = ({ button }) => {
    return (
        button.map((button) =>
            <div className="buttons">{button}</div>)
    )
}

const Eachrow = () => {
    return (
        arr.map((row) =>
            <div className="row"><EachButton button={row} /></div>
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