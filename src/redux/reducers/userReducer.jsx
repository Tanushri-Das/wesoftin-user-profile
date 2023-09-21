// import { FETCH_USERS } from '../actions/userActions';

// const initialState = {
//   users: [],
// };

// const userReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_USERS:
//       return {
//         ...state,
//         users: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default userReducer;

// src/redux/reducers/userReducer.js
import { FETCH_USERS } from '../actions/userActions';

const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};
export default userReducer;