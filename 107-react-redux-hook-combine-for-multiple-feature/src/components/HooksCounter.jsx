import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {increment, decrement} from "../redux/counter/actions";

function HooksCounter(){
    // get initial value
    const count = useSelector((state) => state.counter.value);
    // get dispatch
    const dispatch = useDispatch();

    const incrementHandler = () =>{
      dispatch(increment());
    }

    const decrementHandler = () =>{
      dispatch(decrement());
    }

  return (
    <div>
        <div class="state-area">
            <div class="data-output" id="output">{count}</div>
            <div class="button-area">
                <button id="decrement" onClick={decrementHandler}>Decrement</button>
                <button id="increment" onClick={incrementHandler}>Increment</button>
            </div>
        </div>
    </div>
  )
}

export default HooksCounter
