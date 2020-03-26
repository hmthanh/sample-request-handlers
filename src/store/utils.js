import {compose} from 'redux';

console.log("utils.js");

export const composeEnhancers =
  (process.browser &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    })) ||
  compose;
