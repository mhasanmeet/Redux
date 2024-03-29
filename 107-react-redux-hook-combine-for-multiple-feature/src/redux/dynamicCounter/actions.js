import {DYNAMIC_INCREMENT, DYNAMIC_DECREMENT} from './actionTypes';

// Create actions
export const increment = (value) => {
    return {
        type: DYNAMIC_INCREMENT,
        payload: value
    }
}


export const decrement = (value) =>{
    return {
        type: DYNAMIC_DECREMENT,
        payload: value
    }
}