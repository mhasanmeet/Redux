//find total sum by array reduce
let arr = [10, 20, 30, 40, 50]

let output = arr.reduce((preVal, curVal) => preVal + curVal)

console.log(output) //total sum: 150





//reducer in vanilla javaScript
//data
const actions = [
    {type: "increment", payload: 1},
    {type: "increment", payload: 1},
    {type: "increment", payload: 1},
    {type: "decrement", payload: 1}
]

//initial state
const initialState = {
    value: 0
}

//reduce functionality
const counterReducer = ((state, actions) => {
    if(actions.type === "increment"){
        return {
            ...state, //we will not modified the initial state so for that we just copy the state by spread operator
            value: state.value + actions.payload //if it is increment condition then increase the value
        }
    }
    else if(actions.type === "decrement"){
        return {
            ...state,
            value: state.value - actions.payload //if it is decrement condition then decrease the value
        }
    }
    else{
        return state //we have to always return state(previous value) as reduce structure
    }
})

//final reducer
const finalResult = actions.reduce(counterReducer, initialState)

console.log(finalResult) //{ value: 2 }



/*
    Q: What reduce function do in React?
    A: Reduce the actions functions and return (gives us) updated state.
*/