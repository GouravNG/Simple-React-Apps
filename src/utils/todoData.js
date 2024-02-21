export const todoData=[
    {
        id:1,
        isChecked:false,
        desc:"Milk"

    },
    {
        id:2,
        isChecked:true,
        desc:"Soap"

    },
    {
        id:3,
        isChecked:false,
        desc:"Shopping list"
    }
]
export const addtodoData=(Data)=>{
    todoData.push(Data)
    console.log(todoData.length)
}