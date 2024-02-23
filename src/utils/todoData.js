 export const idGenerator = () => {
    let id = new Date().getSeconds()
    id = Math.ceil(Math.random(id) * 1000)
    return (id)
}
 export let todoData = [
    {
        id: idGenerator(),
        isCheched: false,
        desc: "Milk"
    },
    {
        id: idGenerator(),
        isCheched: true,
        desc: "Suger"
    },
    {
        id: idGenerator(),
        isCheched: true,
        desc: "Tea"
    },
    {
        id: idGenerator(),
        isCheched: false,
        desc: "Water can"
    }
]

export const addTodo=(todo)=>{
    const newTodoData = [...todoData, { id: idGenerator(), isCheched: false, desc: todo }];
    return newTodoData;
}