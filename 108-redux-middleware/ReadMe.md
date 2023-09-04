## Redux Middleware

1. In `store` we will get `applyMiddleware` along with `createStore`

```js

import {createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';

const store = createStore(rootReducer, applyMiddleware());

export default store;
```

2. Then get our middleware function into middleware parameter, suppose we will work in `myLogger` middleware

```js

const store = createStore(rootReducer, applyMiddleware(myLogger));
```

3. Now we create our middleware function by Curry method

```js

const myLogger = (store) => (next) => (action) =>{
    
    // we can do our own functionally here
    // ...

    
    // pass action
    return next(action);
}
```
