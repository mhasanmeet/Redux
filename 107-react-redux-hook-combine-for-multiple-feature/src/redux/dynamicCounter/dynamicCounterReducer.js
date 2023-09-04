import { DYNAMIC_DECREMENT, DYNAMIC_INCREMENT } from "./actionTypes";

// initial state
const initialState = {
    value: 0
}

// Create counter reducer
const dynamicCounterReducer = (state = initialState, action) =>{
    switch (action.type){
        case DYNAMIC_INCREMENT: 
            return {
                ...state,
                value: state.value + action.payload
            };

        case DYNAMIC_DECREMENT: 
            return {
                ...state,
                value: state.value - action.payload
            };

        default: 
            return state
    }
}


export default dynamicCounterReducer;