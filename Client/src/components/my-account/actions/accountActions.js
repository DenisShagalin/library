export const SET_BOOKS_ACCOUNT = 'SET_BOOKS_ACCOUNT';
export const LOAD_MY_BOOKS = 'LOAD_MY_BOOKS';
export const SET_MY_BOOKS = 'SET_MY_BOOKS';
export const RETURN_BOOK = 'RETURN_BOOK';

export const setBooksInAccount = (books) => ({
  type: SET_BOOKS_ACCOUNT,
  payload: books,
});

export const loadMyBooks = (userId) => ({
  type: LOAD_MY_BOOKS,
  payload: {
    userId,
  },
});

export const setMyBooks = (books) => ({
  type: SET_MY_BOOKS,
  payload: books,
});

export const returnBook = (bookId, userId) => ({
  type: RETURN_BOOK,
  payload: {
    bookId,
    userId,
  },
});
