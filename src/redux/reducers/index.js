import {combineReducers} from 'redux';

import usersReducer from './users';

console.log("index reducers");

export default combineReducers({
  users: usersReducer,
});
