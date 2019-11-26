import { put, takeEvery, call } from 'redux-saga/effects';
import http from '../../../utils/http';

import {
  LOAD_USERS,
  setUsers,
  UPDATE_USER_ROLE,
} from '../actions/usersActions';
import {
  LOAD_BOOKS_ADMIN,
  UPDATE_BOOK_ADMIN,
  CREATE_NEW_BOOK,
  setBooks,
  LOAD_TOP_BOOKS, setTopBooks,
} from '../actions/booksActions';
import { LOAD_PAYMENTS, setPayments } from '../actions/paymentsActions';

export function* getUsers() {
  try {
    const users = yield call(http, {
      url: 'admin/users',
      method: 'get',
    });
    yield put(setUsers(users.data))
  } catch (error) {
    // error
  }
}

export function* updateUserRole(action) {
  try {
    const users = yield call(http, {
      url: 'admin/users',
      method: 'put',
      data: action.payload,
    });
    yield put(setUsers(users.data))
  } catch (error) {
    // error
  }
}

export function* loadBooks() {
  try {
    const books = yield call(http, {
      url: 'admin/books',
      method: 'get',
    });
    yield put(setBooks(books.data))
  } catch (error) {
    // error
  }
}

export function* updateBook(action) {
  try {
    const books = yield call(http, {
      url: 'admin/books',
      method: 'put',
      data: action.payload,
    });
    yield put(setBooks(books.data))
  } catch (error) {
    // error
  }
}

export function* createBook(action) {
  try {
    const books = yield call(http, {
      url: 'admin/books',
      method: 'post',
      data: action.payload,
    });
    yield put(setBooks(books.data))
  } catch (error) {
    // error
  }
}

export function* getTopBooks(action) {
  try {
    const books = yield call(http, {
      url: `admin/books/top/${action.payload}`,
      method: 'get',
    });
    yield put(setTopBooks(books.data));
  } catch (error) {
    // 
  }
}

export function* loadPayments(action) {
  try {
    const payments = yield call(http, {
      url: `admin/payments/${action.payload}`,
      method: 'get',
    });
    yield put(setPayments(payments.data));
  } catch (error) {
    // 
  }
}

export default function* AdminRootSaga() {
  yield takeEvery(LOAD_USERS, getUsers);
  yield takeEvery(UPDATE_USER_ROLE, updateUserRole);
  yield takeEvery(LOAD_BOOKS_ADMIN, loadBooks);
  yield takeEvery(UPDATE_BOOK_ADMIN, updateBook);
  yield takeEvery(CREATE_NEW_BOOK, createBook);
  yield takeEvery(LOAD_TOP_BOOKS, getTopBooks);
  yield takeEvery(LOAD_PAYMENTS, loadPayments);
}
