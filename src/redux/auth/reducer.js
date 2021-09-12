import {LOGIN, COUNT} from './types';

const initialState = {
  loginStatus: false,
  count: 0,
};

export default userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loginStatus: true,
      };
    case COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state
  }
};
