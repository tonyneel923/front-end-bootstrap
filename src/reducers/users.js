export default(state = {
  currentUser: {},
  isLoggedIn: true
}, payload) => {
  switch (payload.type) {
    case 'GET_USER_SUCCESS':
      return state.currentUser = payload.user;

    default:
      return state;
  }
};
