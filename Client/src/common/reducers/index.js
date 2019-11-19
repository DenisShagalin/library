import { combineReducers } from 'redux';
import loginReducer from '../../components/login/reducer/loginReducer';
import booksReducer from '../../components/books/reducers/booksReducer';
import adminReducer from '../../components/admin-panel/reducer/adminReducer';
import accountReducer from '../../components/my-account/reducer/accountReducer';

export default combineReducers({
  loginReducer,
  booksReducer,
  adminReducer,
  accountReducer,
});
