import {createStore, applyMiddleware} from 'redux';
import myLogger from './middleware/myLogger';
import rootReducer from './rootReducer';
import logger from 'redux-logger';

const store = createStore(rootReducer, applyMiddleware(myLogger, logger));

export default store;
