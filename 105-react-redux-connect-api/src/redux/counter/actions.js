import {INCREMENT, DECREMENT} from './actionTypes';

// Create actions
export const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value
    }
}


export const decrement = (value) =>{
    return {
        type: DECREMENT,
        payload: value
    }
}