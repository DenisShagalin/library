import { SET_BOOKS, SET_TOP_BOOKS } from '../actions/booksActions';

const initialState = {
  books: [],
  topBooks: {},
};

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    case SET_TOP_BOOKS:
      return {
        ...state,
        topBooks: action.payload,
      }
    default:
      return state;
  }
}
