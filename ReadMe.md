## Redux

Redux is a flexible state container for JavaScript Apps that manages our application state separately.

## Redux Learning Curve

* Learn Redux First.
* Learn Redux Toolkit Second.
* Learn React-Redux Third. 

## React Redux

`npm i redux react-redux`

## React Redux connect API

* Create `actionTypes` and `actions`
* Create a Reducer for counter feature as `counterReducer.js`
* Creating `store` and use by `react-redux` provider
* Connect API (old way)
    * HOC (Higher Order Component)
    * mapStateToProps
    * mapDispatchToProps

## Redux Hook

* install two dependencies `npm i redux react-redux`
* Create `action type` 
* Create `actions`
* Create `Reducer` fot that actions
* Get that reducer in `store`
* Get that store in `App` file of the project and use react-redux `provider`
* Finally get `useSelector()` & `useDispatch()` hooks in the component

## Redux hook for multiple feature

* rootReducer file
* combine reducer

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

## Multiple middleware in Redux

For multiple use we can separate our middleware function from store and make a custom 📁folder for middleware. And move our middleware function into that folder file. 

* Use 3rd party middleware npm package (redux-logger)

Install npm package Redux Logger: `npm i redux-logger`

* We can use multiple middleware into store, something like this

```js

const store = createStore(rootReducer, applyMiddleware(middleware1, middleware2));

export default store;
```

## Redux devtools

* [Redux Devtool plugin](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
    * For this devtools we need to install 3rd party npm package, **redux-devtools-extension** `npm i redux-devtools-extension`

* Import devtools as a middleware 

```js 

import {composeWithDevtools} from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevtools(applyMiddleware(ourMiddleware1, ourMiddleware2)));
```

## Learning
* Course [Think in a Redux way](https://learnwithsumit.com/)