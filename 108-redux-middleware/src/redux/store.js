import {createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';

// Create our first middleware by Curry function
const myLogger = (store) => (next) => (action) =>{
    
    // we can do our own functionally here
    // check upcoming state
    const upcomingState = [action].reduce(rootReducer, store.getState());
    console.log(`Upcoming state: ${JSON.stringify(upcomingState)}`);

    // pass action
    return next(action);
}

const store = createStore(rootReducer, applyMiddleware(myLogger));

export default store;
