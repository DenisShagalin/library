import { put, takeEvery, call } from 'redux-saga/effects';
import http from '../../../utils/http';

import { SIGNIN_REQUEST, signinFailure, signinRequestSuccess } from '../actions/loginActions';

export function* Authorize(action) {
  try {
    const signIn = yield call(http, {
      url: 'login',
      method: 'post',
      data: action.payload,
    });
    yield put(signinRequestSuccess(signIn.data.user));
    localStorage.setItem('token', signIn.data.token);
  } catch (error) {
    yield put(signinFailure(error.response.data.message));
  }
}

export default function* LoginRootSaga() {
  yield takeEvery(SIGNIN_REQUEST, Authorize);
}
