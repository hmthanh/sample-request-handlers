console.log("selectors.js");
export const selectUsers = () => {
  console.log("selectUsers");
  return (state) => {
    return state.users;
  };
};
