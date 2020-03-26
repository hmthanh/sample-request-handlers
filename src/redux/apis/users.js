import axios from 'axios';
console.log("apis.js");

export const fetchGetUsers = () => {
  console.log("API fetchGetUsers");
  return axios.get('https://reqres.in/api/users');
};
