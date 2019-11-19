import { all } from 'redux-saga/effects';
import LoginRootSaga from '../../components/login/saga/loginSaga';
import RegisterRootSaga from '../../components/register-page/sagas/registerSaga';
import BooksRootSaga from '../../components/books/sagas/booksSaga';
import AdminRootSaga from '../../components/admin-panel/sagas/adminSaga';
import accountRootSaga from '../../components/my-account/sagas/accountSagas';

const sagas = function* rootSaga() {
  yield all([
    LoginRootSaga(),
    RegisterRootSaga(),
    BooksRootSaga(),
    AdminRootSaga(),
    accountRootSaga(),
  ]);
};

export default sagas;
