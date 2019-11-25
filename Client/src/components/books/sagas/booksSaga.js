import { put, takeEvery, call } from 'redux-saga/effects';
import http from '../../../utils/http';

import {
  LOAD_BOOKS, setBooks,
  BUY_BOOKS,
} from '../actions/booksActions';

export function* getBooks(action) {
  try {
    const books = yield call(http, {
      url: `books`,
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

export default function* BooksRootSaga() {
  yield takeEvery(LOAD_BOOKS, getBooks);
  yield takeEvery(BUY_BOOKS, buyBook);
}
