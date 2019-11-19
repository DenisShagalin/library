import { put, takeEvery, call } from 'redux-saga/effects';
import http from '../../../utils/http';
import history from '../../../utils/history';

import { REGISTER_NEW_USER, registerNewUserFailure } from '../actions/registerActions';

export function* Registration(action) {
  try {
    yield call(http, {
      url: 'register',
      method: 'post',
      data: action.payload,
    });
    history.push('/');
  } catch (error) {
    yield put(registerNewUserFailure(error.response.data.message));
  }
}

export default function* RegisterRootSaga() {
  yield takeEvery(REGISTER_NEW_USER, Registration);
}
