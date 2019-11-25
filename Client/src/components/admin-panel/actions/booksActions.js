export const LOAD_BOOKS_ADMIN = 'GET_BOOKS_ADMIN';
export const SET_BOOKS_ADMIN = 'SET_BOOKS_ADMIN';
export const UPDATE_BOOK_ADMIN = 'UPDATE_BOOK_ADMIN';
export const CREATE_NEW_BOOK = 'CREATE_NEW_BOOK';
export const LOAD_TOP_BOOKS = 'LOAD_TOP_BOOKS';
export const SET_TOP_BOOKS = 'SET_TOP_BOOKS';

export const loadBooks = () => ({
  type: LOAD_BOOKS_ADMIN,
});

export const setBooks = (books) => ({
  type: SET_BOOKS_ADMIN,
  payload: books,
});

export const updateBook = (book) => ({
  type: UPDATE_BOOK_ADMIN,
  payload: {
    ...book,
  },
});

export const createNewBook = (book) => ({
  type: CREATE_NEW_BOOK,
  payload: book,
})

export const loadTopBooks = (limit = 10) => ({
  type: LOAD_TOP_BOOKS,
  payload: limit,
});

export const setTopBooks = (books = []) => ({
  type: SET_TOP_BOOKS,
  payload: books,
});