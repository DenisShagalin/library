import { put, takeEvery, call } from 'redux-saga/effects';
import http from '../../../utils/http';

import {
  LOAD_MY_BOOKS, setMyBooks,
  RETURN_BOOK,
} from '../actions/accountActions';

export function* loadMyBooks(action) {
  try {
    const books = yield call(http, {
      url: `books/my-books/${action.payload.userId}`,
      method: 'get',
    });
    yield put(setMyBooks(books.data));
  } catch (error) {
    // 
  }
}

export function* returnBook(action) {
  try {
    const books = yield call(http, {
      url: 'book/buy',
      method: 'put',
      data: action.payload,
    });
    yield put(setMyBooks(books.data));
  } catch (error) {
    // 
  }
}

export default function* accountRootSaga() {
  yield takeEvery(LOAD_MY_BOOKS, loadMyBooks);
  yield takeEvery(RETURN_BOOK, returnBook);
}
