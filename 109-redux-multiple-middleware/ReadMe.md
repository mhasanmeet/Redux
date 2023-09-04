## Redux Multiple Middleware

For multiple use we can separate our middleware function from store and make a custom 📁folder for middleware. And move our middleware function into that folder file. 

* Use 3rd party middleware npm package (redux-logger)

Install npm package Redux Logger: `npm i redux-logger`

* We can use multiple middleware into store, something like this

```js

const store = createStore(rootReducer, applyMiddleware(middleware1, middleware2));

export default store;
```


