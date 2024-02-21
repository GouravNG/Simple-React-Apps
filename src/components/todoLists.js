export const TodoList = () => {
    return (
        <>
            <ul>
                <li>
                    <input type="checkbox" id="checkbox1" name="checkbox1" value="check1" />
                    <label for="checkbox1">Option 1</label>
                </li>
                <li>
                    <input type="checkbox" id="checkbox2" name="checkbox2" value="check2" />
                    <label for="checkbox2">Option 2</label>
                </li>
                <li>
                    <input type="checkbox" id="checkbox3" name="checkbox3" value="check3" />
                    <label for="checkbox3">Option 3</label>
                </li>
            </ul>
        </>
    )
}