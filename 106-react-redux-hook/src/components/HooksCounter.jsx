import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {increment, decrement} from "../redux/counter/actions";

function HooksCounter(){
    // get initial value
    const count = useSelector((state) => state.value);
    // get dispatch
    const dispatch = useDispatch();

    const incrementHandler = (value) =>{
      dispatch(increment(value));
    }

    const decrementHandler = (value) =>{
      dispatch(decrement(value));
    }

  return (
    <div>
        <div class="state-area">
            <div class="data-output" id="output">{count}</div>
            <div class="button-area">
                <button id="decrement" onClick={() => decrementHandler(5)}>Decrement</button>
                <button id="increment" onClick={() => incrementHandler(5)}>Increment</button>
            </div>
        </div>
    </div>
  )
}

export default HooksCounter
