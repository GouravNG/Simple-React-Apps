export const Bar = ({ placeHolderName = "Search here" }) => {
    return (
        <>
            <input type="text" placeholder={placeHolderName}></input>
        </>
    )
}