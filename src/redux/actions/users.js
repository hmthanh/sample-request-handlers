import {fetchGetUsers} from '../apis/users';
import {
  USERS_GET_REQUESTED,
  USERS_GET_FAILED,
  USERS_GET_SUCCESS,
} from '../constants/users';
console.log("actions.js");

export const getUsers = () => {
  console.log("action getUsers");
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      console.log("action Promise getUsers");
      try {
        console.log("action try Promise getUsers");
        dispatch({
          type: USERS_GET_REQUESTED,
        });

        const response = await fetchGetUsers();

        dispatch({
          type: USERS_GET_SUCCESS,
          payload: response.data.data,
        });

        resolve(response.data);
      } catch (err) {
        console.log("action catch Promise getUsers");
        reject(err);
        dispatch({
          type: USERS_GET_FAILED,
        });
      }
    });
  };
};
