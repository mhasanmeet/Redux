const output = document.getElementById("output")
const decrement = document.getElementById("decrement")
const increment = document.getElementById("increment")

let count = 0;

decrement.addEventListener("click", ()=>{
    count = count - 1
    output.innerText = count
})

increment.addEventListener("click", ()=>{
    count = count + 1
    output.innerText = count
})

