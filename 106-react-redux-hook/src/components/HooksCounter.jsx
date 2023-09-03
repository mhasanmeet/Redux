import React from 'react';
import { useSelector } from 'react-redux';
import { decrement, increment } from '../redux/counter/actions'

function HooksCounter({}){
    // select initial value
    const count = useSelector((state) => state.value);

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

export default HooksCounter
