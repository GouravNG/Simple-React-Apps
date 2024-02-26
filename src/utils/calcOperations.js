const add = (a, b) => +a + +b
const minus = (a, b) => a - b
const multiplicatoin = (a, b) => a * b
const divide = (a, b) => a / b

export function calculate(a,b,operator){
    switch(operator){
        case "+":
        return(add(a,b))
        case "-":
            return(minus(a,b))
        case "*":
            return (multiplicatoin(a,b))
        case "%":
            return (divide(a,b))
        default: console.log("something went wrong")

    }
}