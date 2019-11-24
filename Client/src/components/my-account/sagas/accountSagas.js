import { put, takeEvery, call } from 'redux-saga/effects';
import http from '../../../utils/http';

import {
  LOAD_MY_BOOKS, setMyBooks,
  RETURN_BOOK,
} from '../actions/accountActions';

export function* loadMyBooks(action) {
  try {
    const books = yield call(http, {
      url: `books/my-books/${action.payload}`,
      method: 'get',
    });
    yield put(setMyBooks(books.data));
  } catch (error) {
    // 
  }
}

export function* returnBook(action) {
  try {
    yield call(http, {
      url: `book/return/${action.payload.id}`,
      method: 'put',
      data: action.payload.book,
    });
    yield call(loadMyBooks, { payload: action.payload.book.userId });
  } catch (error) {
    // 
  }
}

export default function* accountRootSaga() {
  yield takeEvery(LOAD_MY_BOOKS, loadMyBooks);
  yield takeEvery(RETURN_BOOK, returnBook);
}
