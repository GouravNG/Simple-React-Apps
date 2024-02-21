export const Heading=({headingName="DefaultName"})=>{
    return(
        <>
            <h1>{headingName}</h1>
        </>
    )
}
export const TextBox=({placeHolderName="placeholder"})=>{
    return(
        <>
        <input type="text" placeholder={placeHolderName}/>
        </>
    )
}
export const CustomButton=({buttonName="Click me"})=>{
    return(
        <>
        <button>{buttonName}</button>
        </>
    )
}