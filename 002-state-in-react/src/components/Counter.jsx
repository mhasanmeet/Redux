import React, { useState } from 'react'

const counter = () => {
    const [count, setCount] = useState(0)

    const increment = () =>{
        setCount((prevCount) => prevCount + 1)
    }

    const decrement = () => {
        setCount((prevCount) => prevCount - 1)
    }
  return (
    <div>
        <div class="state-area">
            <div class="data-output" id="output">{count}</div>
            <div class="button-area">
                <button id="decrement" onClick={decrement}>Decrement</button>
                <button id="increment" onClick={increment}>Increment</button>
            </div>
        </div>
    </div>
  )
}

export default counter