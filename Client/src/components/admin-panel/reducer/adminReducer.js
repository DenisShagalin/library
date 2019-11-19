import { SET_USERS } from '../actions/usersActions';
import { SET_BOOKS_ADMIN } from '../actions/booksActions';

const initialState = {
  users: [],
  books: [],
};

export default function adminReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case SET_BOOKS_ADMIN:
      return {
        ...state,
        books: action.payload,
      };
    default:
      return state;
  }
}
