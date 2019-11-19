import { SET_BOOKS_ACCOUNT, SET_MY_BOOKS } from '../actions/accountActions';

const initialState = {
  choosenBooks: [],
  myBooks: [],
};

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BOOKS_ACCOUNT:
      return {
        ...state,
        choosenBooks: action.payload,
      };
    case SET_MY_BOOKS:
      return {
        ...state,
        myBooks: action.payload,
      };
    default:
      return state;
  }
}
