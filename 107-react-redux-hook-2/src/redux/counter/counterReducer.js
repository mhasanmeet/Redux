import { DECREMENT, INCREMENT } from "./actionTypes";

// initial state
const initialState = {
    value: 20
}

// Create counter reducer
const counterReducer = (state = initialState, action) =>{
    switch (action.type){
        case INCREMENT: 
            return {
                ...state,
                value: state.value + 1
            };

        case DECREMENT: 
            return {
                ...state,
                value: state.value - 1
            };

        default: 
            return state
    }
}


export default counterReducer;