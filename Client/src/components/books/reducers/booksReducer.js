import { SET_BOOKS } from '../actions/booksActions';

const initialState = {
  books: [],
};

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    default:
      return state;
  }
}
