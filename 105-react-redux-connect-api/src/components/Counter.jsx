import React from 'react'
import { connect } from 'react-redux'
import { decrement, increment } from '../redux/counter/actions'

function counter({count, increment, decrement}){
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

const mapStateToProps = (state) =>{
    return {
        count: state.value
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        increment: (value) => dispatch(increment(value)),
        decrement: (value) => dispatch(decrement(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(counter)
