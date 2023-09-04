import rootReducer from '../rootReducer';

const myLogger = (store) => (next) => (action) =>{
    // check upcoming state
    const upcomingState = [action].reduce(rootReducer, store.getState());
    console.log(`Upcoming state: ${JSON.stringify(upcomingState)}`);

    // pass action
    return next(action);
}

export default myLogger