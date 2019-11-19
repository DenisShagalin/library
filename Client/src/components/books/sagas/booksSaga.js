import { put, takeEvery, call } from 'redux-saga/effects';
import http from '../../../utils/http';

import {
  LOAD_BOOKS, setBooks,
  BUY_BOOKS,
  LOAD_TOP_BOOKS, setTopBooks,
} from '../actions/booksActions';

export function* getBooks() {
  try {
    const books = yield call(http, {
      url: 'books',
      method: 'get',
    });
    yield put(setBooks(books.data));
  } catch (error) {
    // 
  }
}

export function* buyBook(action) {
  try {
    const books = yield call(http, {
      url: 'book/buy',
      method: 'post',
      data: action.payload,
    });
    yield put(setBooks(books.data));
  } catch (error) {
    // 
  }
}

export function* getTopBooks(action) {
  try {
    const books = yield call(http, {
      url: `books/top/${action.payload}`,
      method: 'get',
    });
    yield put(setTopBooks(books.data));
  } catch (error) {
    // 
  }
}

export default function* BooksRootSaga() {
  yield takeEvery(LOAD_BOOKS, getBooks);
  yield takeEvery(BUY_BOOKS, buyBook);
  yield takeEvery(LOAD_TOP_BOOKS, getTopBooks);
}
