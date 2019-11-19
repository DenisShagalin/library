import { SIGNIN_SUCCESS, SIGNIN_FAILURE, SIGNOUT } from '../actions/loginActions';

const initialState = {
  message: '',
  user: {},
  isAdmin: false,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNIN_FAILURE:
      return {
        ...state,
        message: action.payload.message,
        user: action.payload.user,
      }
    case SIGNIN_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        user: action.payload.user,
        isAdmin: action.payload.user.role.name === 'Admin' ? true : false,
      };
    case SIGNOUT:
      return {
        ...state,
        user: {},
        isAdmin: false,
        message: '',
      }
    default:
      return state;
  }
}
