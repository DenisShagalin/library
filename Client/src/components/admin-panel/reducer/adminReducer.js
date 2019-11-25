import { SET_USERS } from '../actions/usersActions';
import { SET_BOOKS_ADMIN, SET_TOP_BOOKS } from '../actions/booksActions';
import { SET_PAYMENTS } from '../actions/paymentsActions';

const initialState = {
  users: [],
  books: [],
  diagramData: [],
  payments: [],
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
    case SET_TOP_BOOKS:
      return {
        ...state,
        diagramData: action.payload,
      };
    case SET_PAYMENTS:
      return {
        ...state,
        payments: action.payload,
      };
    default:
      return state;
  }
}
