const TodoLists = () => {
    return (
        <>
            <li>
                <input type="checkbox" id="checkbox1" name="checkbox1" value="check1" />
                <label htmlFor="checkbox1">Option 1</label>
            </li>
        </>
    )
}

export const TodoList = () => {
    return (
        <>
            <ul>
                <TodoLists />
                <li>
                    <input type="checkbox" id="checkbox2" name="checkbox2" value="check2" />
                    <label htmlFor="checkbox2">Option 2</label>
                </li>
                <li>
                    <input type="checkbox" id="checkbox3" name="checkbox3" value="check3" />
                    <label htmlFor="checkbox3">Option 3</label>
                </li>
            </ul>
        </>
    )
}