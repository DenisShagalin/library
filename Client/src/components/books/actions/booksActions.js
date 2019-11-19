export const LOAD_BOOKS = 'LOAD_BOOKS';
export const SET_BOOKS = 'SET_BOOKS';
export const BUY_BOOKS = 'BUY_BOOKS';
export const LOAD_TOP_BOOKS = 'LOAD_TOP_BOOKS';
export const SET_TOP_BOOKS = 'SET_TOP_BOOKS';

export const loadBooks = () => ({
  type: LOAD_BOOKS,
});

export const setBooks = (books = []) => ({
  type: SET_BOOKS,
  payload: books,
});

export const buyBook = (userId, book) => ({
  type: BUY_BOOKS,
  payload: {
    userId,
    book,
  },
});

export const loadTopBooks = (limit = 5) => ({
  type: LOAD_TOP_BOOKS,
  payload: limit,
});

export const setTopBooks = (books = []) => ({
  type: SET_TOP_BOOKS,
  payload: books,
});
