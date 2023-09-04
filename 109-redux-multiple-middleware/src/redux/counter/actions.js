import {INCREMENT, DECREMENT} from './actionTypes';

// Create actions
export const increment = () => {
    return {
        type: INCREMENT,
    }
}


export const decrement = () =>{
    return {
        type: DECREMENT,
    }
}